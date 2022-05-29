/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from 'react';

const getAverageRGB = (imgEl: HTMLImageElement) => {
  const blockSize = 5; // only visit every 5 pixels
  const defaultRGB = { r: 0, g: 0, b: 0 }; // for non-supporting envs
  const canvas = document.createElement('canvas');
  const context = canvas.getContext && canvas.getContext('2d');
  let data;
  let i = -4;
  const rgb = { r: 0, g: 0, b: 0 };
  let count = 0;
  const height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  const width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  if (!context) {
    return defaultRGB;
  }

  canvas.height = height;
  canvas.width = width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }

  const { length } = data.data;

  while (i + blockSize * 4 < length) {
    i += blockSize * 4;
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = Math.floor(rgb.r / count);
  rgb.g = Math.floor(rgb.g / count);
  rgb.b = Math.floor(rgb.b / count);

  return rgb;
};

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const ShadowImage: React.FC<Props> = (props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [color, setColor] = useState<string>('rgb(0,0,0)');

  useEffect(() => {
    if (imageRef.current) {
      const { r, g, b } = getAverageRGB(imageRef.current);
      const avgColor = `rgb(${r},${g},${b})`;
      if (color !== avgColor) setColor(`rgb(${r},${g},${b})`);
    }
  }, [imageRef.current]);

  return (
    <div
      className="m-10 rounded-3xl"
      style={{ boxShadow: `0 0 100px 12px ${color}` }}
    >
      <img className="rounded-3xl" ref={imageRef} {...props} />
    </div>
  );
};

export default ShadowImage;
