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
	return (
		<div className="customCarousel">
			<Carousel
				centerMode={!isMobile}
				centerSlidePercentage={50}
				infiniteLoop
				showThumbs={false} 
			>
				{
					Array(5).fill().map((foo, i) => (
						<div key={i} className="customCarousel__item">
							<div
								className="customCarousel__item__img"
								style={{
									background: `url(${sampleImg})`
								}}
							/>
							<h3>{i} - This is one project</h3>
							<p>This project was about eating poo poo platters for lunch breakfast and dinner lololol. Fuck SHopee man I hate it</p>
							<CustomButton
								image={Link}
							>
								View Demo
							</CustomButton>
						</div>
					))
				}
			</Carousel>
		</div>
	);
};

CustomCarousel.propTypes = {
	
};

export default CustomCarousel;