import React, { useState, useEffect, useRef } from 'react';

const CountUpOnScroll = ({ targetValue }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const startCount = 0;
          const endCount = targetValue;
          const duration = 5000;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const currentCount = Math.floor(percentage * (endCount - startCount) + startCount);
            setCount(currentCount);

            if (progress < duration) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);
    observer.observe(countRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetValue]);

  return (
    <div ref={countRef}>{count} </div>
  );
};

export default CountUpOnScroll;
