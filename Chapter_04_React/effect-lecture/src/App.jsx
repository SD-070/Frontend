import { useEffect, useState } from 'react';
import './App.css';
import EffectDemo from './components/EffectDemo.jsx';

function App() {
  const [todos, setTodos] = useState(null);
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // let todos = null;

  //useEffect(effectFunction, dependencyArray)
  // useEffect(() => {}, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        // todos = json;
        setTodos(json);
      });
  }, []); // runs only on mount

  useEffect(() => {
    console.log('Runs only on mount');
  }, []);

  // useEffect(() => {
  //   console.log('Runs after every render');
  // });

  useEffect(() => {
    if (count > 5) {
      console.log(`Running whenever count changes: ${count}`);
    }
  }, [count]);

  // console.log('Component top level: runs during render');

  return (
    <>
      <p>First todo: {todos?.[0].title}</p>
      <button type='button' onClick={() => setCount((c) => c + 1)}>
        Count {count}
      </button>
      <button type='button' onClick={() => setToggle((t) => !t)}>
        Toggle
      </button>

      {toggle && <EffectDemo />}
    </>
  );
}

export default App;
