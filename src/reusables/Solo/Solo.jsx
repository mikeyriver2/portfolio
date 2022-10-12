import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import * as YUKA from 'yuka';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Solo({ still, show, isMobile }) {
  // using this for event listener
  const showRef = useRef(show);

  const mousePositionArray = useRef([]);
  const threeDom = useRef(null);
  const mousePosition = useRef({
    x: 0,
    y: 0
  });

  useEffect(() => {
    showRef.current = show;
  }, [show]);  

  useEffect(() => {
    if (!still) {
      document.body.onmousemove = function(e){
        mousePosition.current = {
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        };

        setTimeout(() => {
          mousePositionArray.current = [...mousePositionArray.current, {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
          }]  
        }, 500);
      }
    };

		const soloWidth = still ? 210 : window.innerWidth;
		const soloHeight = still ? 175 : window.innerHeight;
    const renderer = new THREE.WebGL1Renderer({ alpha: true });
    renderer.setSize(soloWidth, soloHeight);
    
    threeDom.current.appendChild(renderer.domElement);

    // Instantiate Scene
    const scene = new THREE.Scene();

    // The 3d type of camera
    const camera = new THREE.PerspectiveCamera(
      75, // fov
      soloWidth / soloHeight,  // aspect ratio
      .1, // near (min distance from cam to render)
      1000  // far (max distance for cam to render)
    );

    renderer.render(scene, camera); 

    // used to see orbits with mouse
    // const orbit = new OrbitControls(camera, renderer.domElement);

    const light = new THREE.AmbientLight(0x404040, 5); // soft white light
    scene.add(light);

    // const axesHelper = new THREE.AxesHelper(5); // length of axis 
    // scene.add(axesHelper);
    // scene originall at z, y and x coordinate 0, so we need to move
    
    if (!still) {
      camera.position.set(0, 0, 7) // same as ^
    } else {
      camera.position.set(0, .8, 1.9) // same as ^
    }
    // orbit.update(); // must be called everytime camera changes

    // re-render
    renderer.render(scene, camera);
    const entityManager = new YUKA.EntityManager();
    // main entity
    const vehicle = new YUKA.Vehicle();

    const sync = (entity, renderComponent) => {
      // used to copy mesh copy all calculations for object transofmrations/animations
      renderComponent.matrix.copy(entity.worldMatrix)
    }

    let dog;
    const gltfLoader = new GLTFLoader();
    let mixer
    gltfLoader.load('./premium_wolf/source/scene.gltf', (gltcScene) => {
      dog = gltcScene;
			if (!still) {
      	dog.scene.matrixAutoUpdate = false;
			} else {
        dog.scene.rotation.x = .2;
      }
      // dog.scene.rotateY(3)
      vehicle.setRenderComponent(dog.scene, sync);
      vehicle.rotateTo(new YUKA.Vector3(-4, 0, 0), 1)
      mixer = new THREE.AnimationMixer(dog.scene);
      const clips = gltcScene.animations;
      const clip = THREE.AnimationClip.findByName(clips, still ? 'pose_exited' : 'walk')
      const action = mixer.clipAction(clip);

      action.play();

      scene.add(dog.scene);
    });

    // vehicle.scale.set(.3,.3,.3)

    // set first checkpoint  of vehicle
    // box.rotation.set(0, 2, 2);

    entityManager.add(vehicle);

    // target where we want object to go to
    const targetGeometry = new THREE.SphereGeometry(.1);
    const targetMaterial = new THREE.MeshPhongMaterial({ opacity: 0, color: "white", transparent: true });
    const targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
    targetMesh.matrixAutoUpdate = false; // need this since YUKA position is set and not THREEJS
    scene.add(targetMesh);

    // turn it into 'smart' by merging it to YUKA lib
    const target = new YUKA.GameEntity();
    target.setRenderComponent(targetMesh, sync);
    target.position.set(-1, -3, 0);
    entityManager.add(target);

    // find based on position of target
    // const seekBehavior = new YUKA.SeekBehavior(target.position);
    
    // create a plane to be used in finding point in screen
    const planeGeo = new THREE.PlaneGeometry(25, 25);
    const planeMaterial = new THREE.MeshBasicMaterial({
      visible: false
    });
    const planeMesh = new THREE.Mesh(planeGeo, planeMaterial);
    planeMesh.name = 'name';
    scene.add(planeMesh);

    const seekBehavior = new YUKA.ArriveBehavior(target.position, 2, 1); // more gracefull stopping when arriving
    //  last arg to offset from arrival position
		if (!still) {
    	vehicle.steering.add(seekBehavior);
		}

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    window.addEventListener('mousemove', (e) => {
      if (dog && showRef.current) {
        // wolf click event
        const mouse = new THREE.Vector2();
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera );
        const intersects = raycaster.intersectObject(dog.scene, true);
        if (intersects.length > 0) {
          document.body.style.cursor = 'pointer' 
        } else {
          document.body.style.cursor = 'default'
        }
      }
    });

    window.addEventListener('mousedown', (e) => {
      if (dog && !still) {
        // wolf click event
        const mouse = new THREE.Vector2();
        mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        raycaster.setFromCamera( mouse, camera );
        const intersects = raycaster.intersectObject(dog.scene, true);
        if (intersects.length > 0) {
          document.body.style.cursor = 'pointer' 
          const clips = dog.animations;

          const clip = THREE.AnimationClip.findByName(clips, 'interact_takeoff')
          mixer.stopAllAction()
          const action = mixer.clipAction(clip);
          // pause at last animation frame
          action.clampWhenFinished = true;
          action.setLoop( THREE.LoopOnce );

          action.play();

          // put behind after animation finish
          setTimeout(() => {
            threeDom.current.style.display = 'none';
            threeDom.current.style.zIndex = -1

            document.querySelector('.solo__p').style.display = 'none';
            document.querySelector('.solo__p').style.zIndex = -1;
          },5000);
        }
      }
    });

    setInterval(() => {
      // tracker interval
      const latestCoordinate = mousePositionArray.current.pop();
      if (latestCoordinate) {
        pointer.set(latestCoordinate.x, latestCoordinate.y);
      
        raycaster.setFromCamera( pointer, camera );
        const intersects = raycaster.intersectObjects(scene.children);
        for ( let i = 0; i < intersects.length; i ++ ) {

          if (intersects[i].object.name === 'name') {
            target.position.set(
              intersects[i].point.x,
              intersects[i].point.y,
              0
            );
          }
        }
      }
    }, 500);
  
    vehicle.position.set(-2, 0, 0);

    vehicle.maxSpeed = 2;
  
    const time = new YUKA.Time();
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = time.update().getDelta()
      // render YUKA
      entityManager.update(delta);
      if (mixer) mixer.update(clock.getDelta());
      if (dog) {
          const { x: vX, y: vY } = vehicle.position;
          const { x: tX, y: tY } = target.position;

          // console.log(vX - tX)
          // console.log(vY - tY)
          // console.log('--------')

          dog.scene.rotation.y += .01;
          
          if (Math.abs(vX - tX)  < .4 && Math.abs(vY - tY)  < .5) {
            // console.log('am here')
            // vehicle.rotateX = -.5 * Math.PI;
            target.position.z = 1.5
          }
      }

      renderer.render(scene,camera);
    }

    renderer.setAnimationLoop(animate);

  }, []);

  return (
    <>
      <div ref={threeDom} className={`solo${still ? `--still` : `${show ? ' show' : ''}`}`} />
      <p className={`solo__p${show ? ' show' : ''}`}>
        Solo will follow {isMobile ? 'wherever you tap' : 'your mouse'} because he loves people!
        Click on him if you want him to go back home.
      </p>
    </>
  );
}

Solo.propTypes = {
  still: PropTypes.bool,
  show: PropTypes.bool,
  isMobile: PropTypes.bool,
}

Solo.defaultProps = {
  still: false,
  show: false,
  isMobile: false
}

export default Solo;
