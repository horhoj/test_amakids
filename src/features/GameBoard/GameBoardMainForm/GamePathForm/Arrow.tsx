import { FC } from 'react';
import { PathStep } from '../../types';

interface ArrowProps {
  pathStep: PathStep;
}

export const Arrow: FC<ArrowProps> = ({ pathStep }) => {
  let deg = 0;

  if (pathStep === 'down') {
    deg = 90;
  }

  if (pathStep === 'left') {
    deg = 180;
  }

  if (pathStep === 'up') {
    deg = 270;
  }

  return (
    <span
      style={{
        width: '20px',
        height: '20px',
        transform: `rotateZ(${deg}deg)`,
        display: 'flex',
      }}
    >
      <svg
        id="right-arrow-foward-sign"
        version="1.1"
        viewBox="0 0 15.698 8.706"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 " />
      </svg>
    </span>
  );
};
