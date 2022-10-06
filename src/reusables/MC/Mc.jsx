import React from 'react';
import PropTypes from 'prop-types';

import Grass from '../../assets/images/Grass.png';
import GrassDesktop from '../../assets/images/GrassDesktop.png';
import Tree from '../../assets/images/Tree.png';
import GrassBlock from '../../assets/images/Grass_Block.png';

import {
	checkIfDesktop
} from '../../helper';

const Mc = props => {
	return (
		<div className="mc">
			<img className="mc__tree" src={Tree} />
			<img className="mc__grass" src={checkIfDesktop() ? GrassDesktop : Grass} />
			<img className="mc__grassBlock" src={GrassBlock} />
			<img className="mc__tree2" src={Tree} />
		</div>
	);
};

Mc.propTypes = {
	
};

export default Mc;