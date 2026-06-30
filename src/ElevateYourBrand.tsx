import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';

export const ElevateYourBrand: React.FC = () => {
  const frame = useCurrentFrame();

  const ease = Easing.bezier(0.4, 0, 0.2, 1);

  // Text: fade + scale in 0→30, hold 30→110, fade + slide up 110→150
  const textOpacity = interpolate(
    frame,
    [0, 30, 110, 150],
    [0, 1, 1, 0],
    { easing: ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const textScale = interpolate(
    frame,
    [0, 30],
    [0.85, 1],
    { easing: ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const textY = interpolate(
    frame,
    [110, 150],
    [0, -40],
    { easing: ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // Accent line: draws in frame 20→65, holds, fades with text at 110→150
  const lineScaleX = interpolate(
    frame,
    [20, 65],
    [0, 1],
    { easing: ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const lineOpacity = interpolate(
    frame,
    [20, 45, 110, 150],
    [0, 1, 1, 0],
    { easing: ease, extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #1c1c1e 0%, #0d1b2a 100%)',
        fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif",
      }}
    >
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px) scale(${textScale})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 28,
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: 8,
            textAlign: 'center',
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}
        >
          ELEVATE<br />YOUR BRAND
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 480,
            height: 4,
            borderRadius: 2,
            backgroundColor: '#f97316',
            opacity: lineOpacity,
            transform: `scaleX(${lineScaleX})`,
            transformOrigin: 'left center',
          }}
        />
      </div>
    </div>
  );
};
