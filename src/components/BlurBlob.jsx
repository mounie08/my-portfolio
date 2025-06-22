import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position = { top: '50%', left: '50%' }, size = { width: '300px', height: '300px' } }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
      }}
    >
      <div
        className="w-full h-full rounded-full opacity-20 blur-3xl animate-pulse bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400"
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
