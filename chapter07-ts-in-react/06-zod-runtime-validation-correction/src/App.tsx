import { useEffect, useState } from 'react';
import Card from './components/Card';
import { getProducts } from './data';
import type { Product } from './types';

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		// const fetchProducts = async () => {
		// 	try {
		// 		const allProducts = await getProducts();
		// 		console.log(allProducts);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// };
		// fetchProducts();
		(async () => {
			try {
				const allProducts = await getProducts();
				console.log(allProducts);
				setProducts(allProducts);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<div className='p-8'>
			<header className='text-center'>
				<h1 className='text-6xl'>Runtime Validation with Zod</h1>
				<p>
					Step 6: Use your validated data to render cards. Pass the needed data
					via props, and replace the current hard coded values
				</p>
			</header>
			<section className='p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center'>
				{products.map((prod) => (
					<Card key={prod.id} prod={prod} />
				))}
			</section>
		</div>
	);
}

export default App;
