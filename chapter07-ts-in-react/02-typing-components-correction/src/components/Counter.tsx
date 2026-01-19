import { useState } from 'react';
// components/Counter.tsx
// This component should receive an `initialCount` number prop
// Pass that initial count as the initial value of a piece of state called count

// Render buttons to increase, decrease and reset
type CounterProps = {
	initialCount: number;
};
const Counter = ({ initialCount }: CounterProps) => {
	const [count, setCount] = useState(initialCount);
	return (
		<div>
			<p>Initial count: {initialCount}</p>
			<div>
				Current count:
				<button onClick={() => setCount((prev) => prev - 1)}>-</button>
				<span>{count}</span>
				<button onClick={() => setCount((prev) => prev + 1)}>+</button>
				<button onClick={() => setCount(initialCount)}>Reset</button>
			</div>
		</div>
	);
};

export default Counter;
