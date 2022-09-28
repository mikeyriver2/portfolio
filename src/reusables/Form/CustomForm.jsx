import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton/CustomButton';

const CustomForm = props => {
  return (
    <div className="customForm">
      <h1>INTERESTED?</h1>
      <h2>Let me know!</h2>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Mikey Rivera" />

        <label>Email Address</label>
        <input type="text" placeholder="mikeyriver2@gmail.com" />

        <label>Message</label>
        <textarea placeholder="Hi, nice to meet you Mikey!" rows="10" />
      </form>

      <CustomButton>
        Send
      </CustomButton>
    </div>
  );
};

CustomForm.propTypes = {
  
};

export default CustomForm;