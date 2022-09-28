import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ children, image }) => {
	return (
		<div className="customButton">
			<button>
				{ image && <img src={image} /> }
				{ children }
			</button>
		</div>
	);
};

CustomButton.propTypes = {
	children: PropTypes.node.isRequired,
	image: PropTypes.string
};

CustomButton.defaultProps = {
	image: ''
}

export default CustomButton;