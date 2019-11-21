import React from 'react';

export default ({
  width = '27',
  height = '32',
  fill = '000000',
  margin = '0',
  padding = '0 0 0 0',
  viewBox = '0 0 27 32'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      margin={margin}
      padding={padding}
    >
      <path
        d="M5.5025 32H26.815V29.3125H5.5025C4.79417 29.3125 4.16917 29.0521 3.6275 28.5312C3.08583 28.0104 2.815 27.3958 2.815 26.6875C2.815 25.9375 3.08583 25.3021 3.6275 24.7812C4.16917 24.2604 4.79417 24 5.5025 24H26.815V0H4.19C3.02333 0 2.065 0.385417 1.315 1.15625C0.564999 1.92708 0.189999 2.875 0.189999 4V26.6875C0.189999 28.1458 0.710832 29.3958 1.7525 30.4375C2.79417 31.4792 4.04417 32 5.5025 32ZM2.815 4C2.815 3.125 3.27333 2.6875 4.19 2.6875H24.19V21.3125H5.5025C4.71083 21.3125 3.815 21.5417 2.815 22V4ZM4.19 26.6875C4.19 27.5625 4.6275 28 5.5025 28H26.815V25.3125H5.5025C4.6275 25.3125 4.19 25.7708 4.19 26.6875ZM21.5025 5.3125H6.815V13.3125H21.5025V5.3125ZM18.815 10.6875H9.5025V8H18.815V10.6875Z"
        fill="white"
      />
    </svg>
  );
};