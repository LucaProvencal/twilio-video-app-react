import React, { useState, useRef } from 'react';
import IntroContainer from '../IntroContainer/IntroContainer';
import CircularMenu from './CircularMenu';
import { Box } from '@material-ui/core';

export enum Steps {
  roomNameStep,
  deviceSelectionStep,
}

export default function PreJoinScreens() {
  const isMouseDownRef = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleMouseDown = () => {
    isMouseDownRef.current = true;
  };

  const handleMouseLeave = () => {
    if (isMouseDownRef.current) setIsMenuOpen(true);
  };

  window.addEventListener('mouseup', handleMouseUp);

  return (
    <IntroContainer>
      <Box height="200px" width="100%">
        <Box
          height={20}
          width={20}
          style={{
            position: 'relative',
            top: '50%',
            left: '50%',
            backgroundColor: 'lightblue',
            transform: 'translate(-50%, -50%)',
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
        >
          {!isMenuOpen && (
            <CircularMenu>
              <p>monkety</p>
              <p>monketyaef</p>
              <p>monketaefy</p>
              <p>monkaefety</p>
              <p>monkefaety</p>
            </CircularMenu>
          )}
        </Box>
      </Box>
    </IntroContainer>
  );
}
