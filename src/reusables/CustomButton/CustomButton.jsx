import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ children, image, onClick }) => {
	return (
		<div className="customButton">
			<button onClick={onClick}>
				{ image && <img src={image} /> }
				{ children }
			</button>
		</div>
	);
};

CustomButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	image: PropTypes.string
};

CustomButton.defaultProps = {
	onClick: () => {},
	image: ''
}

export default CustomButton;