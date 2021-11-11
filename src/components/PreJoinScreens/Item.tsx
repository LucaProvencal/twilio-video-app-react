import React, { useState, useRef } from 'react';
import { Box } from '@material-ui/core';

const Item = () => {
  // this should take a division prop which will render sections of donut divided that many times
  // each item will have common origin in center of circle, should be able to rotate them by x degrees
  return (
    <Box
      style={{
        position: 'absolute',
        borderRadius: '50%',
        height: '200px',
        width: '200px',
        transform: 'translate(-50%, -50%)',
        opacity: 0.5,
        border: '20px solid grey',
        margin: 'auto',
      }}
    />
  );
};

export default Item;
