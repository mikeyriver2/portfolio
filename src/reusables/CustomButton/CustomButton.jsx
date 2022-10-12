import React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ children, image, onClick, disabled }) => {
	return (
		<div className="customButton">
			<button onClick={onClick} disabled={disabled}>
				{ image && <img src={image} /> }
				{ children }
			</button>
		</div>
	);
};

CustomButton.propTypes = {
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
	image: PropTypes.string
};

CustomButton.defaultProps = {
	disabled: false,
	onClick: () => {},
	image: ''
}

export default CustomButton;