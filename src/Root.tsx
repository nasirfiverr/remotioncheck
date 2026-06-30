import React from 'react';
import { Composition } from 'remotion';
import { ElevateYourBrand } from './ElevateYourBrand';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ElevateYourBrand"
      component={ElevateYourBrand}
      durationInFrames={150}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
