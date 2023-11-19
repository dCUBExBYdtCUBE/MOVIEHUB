import React, { useEffect, useState } from 'react';
import './loading.css'; // Import your loader styles

const LoadingScreen = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setHidden(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const handleTransitionEnd = () => {
    document.body.removeChild(loaderRef.current);
  };

  const loaderRef = React.createRef();

  return (
    <div
      ref={loaderRef}
      className={`loader ${hidden ? 'loader--hidden' : ''}`}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Your loader content */}
      <div></div>
    </div>
  );
};

export default LoadingScreen;
