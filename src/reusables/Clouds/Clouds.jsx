import React from 'react';

import { ReactComponent as Cloud } from '../../assets/images/Cloud.svg';
import { ReactComponent as CloudTablet } from '../../assets/images/Cloud_Tablet.svg';

import {
  checkIfMobile,
	checkIfDesktop,
} from '../../helper';

const Clouds = () => {
	return (
		<div className="clouds">
      { 
				checkIfMobile() 
					? <Cloud /> 
				: checkIfDesktop()
						? <><CloudTablet /><CloudTablet /><CloudTablet /></>
						:	<CloudTablet />
			}
		</div>
	);
};

export default Clouds;