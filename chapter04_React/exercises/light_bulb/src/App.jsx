import { useState } from 'react';
import LightBulb from './components/LightBulb.jsx';

const App = () => {
  const [isNight, setIsNight] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // isNight ? setIsNight(false) : setIsNight(true);
    setIsNight((prev) => (count < 10 ? !prev : false));

    if (count >= 10) {
      alert('Save some energy');
    }

    if (!isNight) {
      setCount((c) => c + 1);
    }
    // setCount((c) => (!isNight ? c + 1 : c));
  };

  return (
    <>
      <button onClick={handleClick} type='button'>
        {isNight ? 'Turn light off' : 'Turn light on'} {count}
      </button>
      <LightBulb isNight={isNight} />
    </>
  );
};
export default App;
