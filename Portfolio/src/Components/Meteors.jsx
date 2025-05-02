import React, { useEffect, useState } from 'react';

const randomBetween = (min, max) => Math.random() * (max - min) + min;

export default function Meteors({ count = 20 }) {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: count }).map(() => ({
      top: `${randomBetween(0, 100)}vh`,
      left: `${randomBetween(0, 100)}vw`,
      animationDelay: `${randomBetween(0.2, 1.2)}s`,
      animationDuration: `${randomBetween(2, 10)}s`,
      width: '2px',
      height: '100px',
      opacity: randomBetween(0.5, 1),
      transform: 'rotate(215deg)',
    }));
    setStyles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {styles.map((s, i) => (
        <span
          key={i}
          className="meteor"
          style={s}
        />
      ))}
    </div>
  );
}
