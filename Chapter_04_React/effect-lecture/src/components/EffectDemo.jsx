import { use, useEffect, useState } from 'react';

export default function EffectDemo() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log('EffectDemo is mounted');
  }, []);

  useEffect(() => {
    const handleResize = (e) => {
      console.log(e.target.innerWidth);
      setSize(e.target.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>Hello, Effect! - {size}</div>;
}
