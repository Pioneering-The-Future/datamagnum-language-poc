import React from 'react';

const MicrophoneIcon = ({ frequency }) => {
  return (
    <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: '1000', color: 'white' }}>
      <i className="fa fa-microphone" style={{ fontSize: '24px', marginRight: '5px' }}></i>
      <span>{frequency} Hz</span>
    </div>
  );
};

export default MicrophoneIcon;
