import type { Product } from '../types';

type CardProps = {
	prod: Product;
};

const Card = ({ prod }: CardProps) => {
	return (
		<div className='card bg-base-100 w-96 shadow-sm'>
			<figure>
				<img src={prod.thumbnail} alt={prod.title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{prod.title}</h2>
				<span>${prod.price}</span>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
