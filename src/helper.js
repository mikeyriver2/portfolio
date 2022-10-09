export function checkIfMobile() {
    const { innerWidth, innerHeight } = window;

    // anything considered bigger than this will be tablet and greater
    return innerWidth <= 490 && innerHeight < 1024; // && innerWidth <= 820;
}

export function checkIfDesktop() {
    const { innerWidth } = window;

    // anything considered bigger than this will be tablet and greater
    return innerWidth > 1280; // && innerWidth <= 820;
}

export async function visibilityHandler() {
    const navDom = document.querySelector('.mikeyriver__nav');
    const basicDom = document.querySelector('.mikeyriver__basic');
    const musicDom = document.querySelector('.mikeyriver__music');
    const resumeDom = document.querySelector('.mikeyriver__resume');

    const nav = await isElementInViewport(navDom);
    const basic = await isElementInViewport(basicDom);
    const music = await isElementInViewport(musicDom);
    const resume = await isElementInViewport(resumeDom);

    return {
        nav,
        basic,
        music,
        resume
    }
}

export async function isElementInViewport (e) {
    // https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
    let isIntersecting = false

    const observerPromise = new Promise((resolve, reject) => {
        const observer = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                isIntersecting = true;
            }
                resolve(isIntersecting)
            }, {
            root: null,
            threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
        })
    
        observer.observe(e);
    });
    
    const toReturn = await observerPromise; 
    return toReturn;
}

