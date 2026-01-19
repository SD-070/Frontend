// components/ProductList.tsx
// This component should receive a `products` array
// where each product has an `id` (number) and `title` (string)

type Product = {
	id: number;
	title: string;
};

type ProductListProps = {
	products: Product[];
};
// type ProductListProps = {
// 	products: {
// 		id: number;
// 		title: string;
// 	}[];
// };
const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</ul>
	);
};

export default ProductList;
