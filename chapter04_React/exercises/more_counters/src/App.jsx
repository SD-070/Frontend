import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <div>
      <Counter count={count} setter={setCount} />

      <Counter count={count2} setter={setCount2} />

      <Counter count={count3} setter={setCount3} />
    </div>
  );
}

export default App;
