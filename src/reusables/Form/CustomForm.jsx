import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton/CustomButton';

const CustomForm = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const disabled = !name 
    || !email 
    || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    || !message
    || loading;

  useEffect(() => {
    emailjs.init("user_F0aqX0rlGVlwrYQTAWncC");
  }, []);

  const resetForm = () => {
    setName('');
    setMessage('');
    setEmail('');
  };

  const handleSend = () => {
    setLoading(true);
    const templateParams = {
      name,
      email,
      message,
    };
   
    emailjs.send('service_1xwhb3v', 'gajahtest', templateParams)
      .then(function(response) {
         alert('Thank you for reaching out! I will be sure to reach out as soon as I can :D');
         setLoading(false);
         resetForm();
      }, function(error) {
         alert('Form did not send properly :( I am sorry for this. Please reach out to me at mikeyriver2@gmail.com');
         setLoading(false);
         resetForm();
      });
  }
  return (
    <div className="customForm">
      <h1>INTERESTED?</h1>
      <h2>Let me know!</h2>

      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="Mikey Rivera"
          onChange={({target}) => { setName(target.value)}}
          value={name}
        />

        <label>Email Address</label>
        <input
          type="text"
          placeholder="mikeyriver2@gmail.com"
          onChange={({target}) => { setEmail(target.value)}}
          value={email}
        />

        <label>Message</label>
        <textarea
          placeholder="Hi, nice to meet you Mikey!"
          rows="10"
          onChange={({target}) => { setMessage(target.value)}}
          value={message}
        />
      </form>

      <CustomButton
        disabled={disabled}
        onClick={handleSend}
      >
        Send
      </CustomButton>
    </div>
  );
};

CustomForm.propTypes = {
  
};

export default CustomForm;