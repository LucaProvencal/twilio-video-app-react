import React, { useState, useRef, ReactElement, CSSProperties } from 'react';
import { Box } from '@material-ui/core';

interface Props {
  children: ReactElement[];
}

const circle: CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  height: '20em',
  width: '20em',
  transform: 'translate(-50%, -50%)',
  opacity: 0.5,
  border: '20px solid grey',
  margin: 'auto',
};

const liStyle: CSSProperties = {
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  right: 0,
  width: '50%',
  height: '50%',
  transformOrigin: '0% 100%',
};

const itemStyle: CSSProperties = {
  position: 'absolute',
  left: '-100%',
  width: '200%',
  height: '200%',
  textAlign: 'center',
  transform: 'skewY(-60deg) rotate(36deg)',
  paddingTop: '20px',
};

const CircularMenu = ({ children }: Props) => {
  // this should take a division prop which will render sections of donut divided that many times
  // each item will have common origin in center of circle, should be able to rotate them by x degrees

  return (
    <ul style={circle}>
      {children.map((element, index) => (
        <li style={liStyle}>
          <Box
            style={{
              position: 'absolute',
              transform: `rotate(${360 / (children.length - index)}deg) skewY(${90 -
                360 / (children.length - index)}deg)`,
              opacity: 0.5,
              border: '20px solid grey',
              margin: 'auto',
            }}
          >
            <div style={itemStyle}>{element}</div>
          </Box>
        </li>
      ))}
    </ul>
  );
};

export default CircularMenu;
