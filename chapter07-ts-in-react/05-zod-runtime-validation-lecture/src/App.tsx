import { useEffect, useState } from 'react';
import { z } from 'zod/v4';

// type Todo = {
// 	completed: boolean;
// 	id: number;
// 	title: string;
// 	userId: number;
// };

const TodoSchema = z.object({
	completed: z.boolean(),
	id: z.number(),
	title: z.string('Must have a string'),
	userId: z.number()
});

const TodoArraySchema = z.array(TodoSchema);

// type Todo = z.infer<typeof TodoSchema>;
type TodoArray = z.infer<typeof TodoArraySchema>;

const App = () => {
	const [todos, setTodos] = useState<TodoArray>([]);
	useEffect(() => {
		const getTodo = async () => {
			try {
				const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
				if (!res.ok) throw new Error('Something went wrong!');
				const dataRes = await res.json();

				const { success, data, error } = TodoArraySchema.safeParse(dataRes);

				if (!success) {
					throw new Error(z.prettifyError(error));
				}

				console.log(data);
				setTodos(data);
			} catch (error) {
				console.error(error);
			}
		};
		getTodo();
	}, []);
	return (
		<div>
			<h1>Runtime Validation with Zod</h1>
			<ul>
				{/* {todos && (
					<li className={todos.completed ? 'line-through' : ''}>
						{todos.title}
					</li>
				)} */}
				{todos.map((todo) => (
					<li key={todo.id} className={todo.completed ? 'line-through' : ''}>
						{todo.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
