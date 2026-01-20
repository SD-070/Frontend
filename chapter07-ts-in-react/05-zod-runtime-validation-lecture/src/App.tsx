import { useEffect } from 'react';

const App = () => {
	useEffect(() => {
		const getTodo = async () => {
			try {
				const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
				if (!res.ok) throw new Error('Something went wrong!');
				const data = await res.json();

				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};
		getTodo();
	}, []);
	return (
		<div>
			<h1>Runtime Validation with Zod</h1>
		</div>
	);
};

export default App;
