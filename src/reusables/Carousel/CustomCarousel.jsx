import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import Link from '../../assets/images/Link.svg'

import CustomButton from '../CustomButton/CustomButton';

const sampleImg = "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const CustomCarousel = ({
	isMobile
}) => {
	const projects = [
		{
			image: 'https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/ca5d12864c12916c05640b36e47ac5c9.png',
			header: 'Shopee',
		description: `
			Official role as a front end developer but regularly performs full stack development under
			Business Technologies, and constantly on the look out for new technologies to streamline development and work processes.
		`,
			button: {
				text: 'View Site',
				url: 'https://shopee.ph'
			}
		},
		{
			image: 'https://storage.googleapis.com/studio-design-asset-files/projects/9YWy0wVYaM/s-1522x951_v-fms_webp_1a08f022-c60f-4ea3-8c17-5467c536a254_middle.webp',
			header: 'Hackazouk',
		description: `
			Full stack developer for the flagship product https://official-alumni.com/ . Delved heavily on both front end and back end aspects of the development life cycle of our product.
		`,
			button: {
				text: 'View Site',
				url: 'https://www.hackazouk.com/'
			}
		},
		{
			image: 'https://i.imgur.com/r2iV5Xj.png',
			header: '(Inactive) Audiohub.ph',
			description: 'A waterfall based freelance project where I developed an ecommerce system from the ground up - both front end and back end - both customer and seller side. Site is currently inactive so I deployed the site instead to cloud run solely for sandbox purposes only.',
			button: {
				text: 'View Site',
				url: 'https://audiohub-wif2gfp45a-as.a.run.app'
			}
		},
		{
			image: 'https://i.imgur.com/AKO1CMA.png',
			header: 'Orchestra Reservation System',
			description: 'A web based reservation system that allows customers to reserve seats and to track purchases - created for the Ateneo Blue Symphony Orchestra.',
			button: {
				text: 'View Repository',
				url: 'https://github.com/mikeyriver2/absystem'
			}
		},
		{
			image: 'https://i.imgur.com/Hg6bFmm.png',
			header: 'Pediatrix - Private EMR',
			description: 'Developed an Electronic Medical Record for use of private medical businesses. It allows doctors to track in/out patient records and payments. Figma was designed by a UX designer and implemented by me.',
			button: {
				text: 'View Figma',
				url: 'https://www.figma.com/file/OYTdzxdQ9EVdsMC0v7aNTM/PEDIATRIX_UI-V.1-(MOBILE)?node-id=0%3A1'
			}
		},
		{
			image: 'https://assets.rappler.com/BA2971912D0E4F10825163812D706961/img/7248FDF4C5D84EF9B44CA8830FC44A9B/spark-philippines-pledge-website-october-10-2019-001_7248FDF4C5D84EF9B44CA8830FC44A9B.jpg',
			header: 'Spark - Non Profit Bidding',
			description: 'Developed an interface that allows stakeholders to bid and for organizations to garner funds for their cause. Currently non-operational but was featured in a news article',
			button: {
				text: 'View Article',
				url: 'https://r3.rappler.com/move-ph/242210-pledge-site-girl-empowerment'
			}
		},
	]

	const projectsList = projects.map(({image, header, description, button: {text, url}}, i) => (
		<div key={i} className="customCarousel__item">
			<div
				className="customCarousel__item__img"
				style={{
					backgroundImage: `url(${image})`,
					backgroundPosition: 'center'
				}}
			/>
			<h3>{header}</h3>
			<p>{description}</p>
			<CustomButton
				onClick={() => {
					window.open(url, "_blank");
				}}
				image={Link}
			>
				{text}
			</CustomButton>
		</div>
	));

	return (
		<div className="customCarousel">
			{ projectsList }
			<Carousel
				centerMode={!isMobile}
				centerSlidePercentage={50}
				infiniteLoop
				autoPlay
				interval={2000}
				showThumbs={false} 
			>
				{ projectsList }
			</Carousel>
		</div>
	);
};

CustomCarousel.propTypes = {
	
};

export default CustomCarousel;
