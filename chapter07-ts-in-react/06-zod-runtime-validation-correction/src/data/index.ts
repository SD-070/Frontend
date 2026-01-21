import { z } from 'zod/v4';
import { ProductArraySchema } from '../schemas';

export const getProducts = async () => {
	const res = await fetch('https://dummyjson.com/products');

	if (!res.ok) throw Error('Something went wrong!');

	const data = await res.json();

	const {
		success,
		data: parsedData,
		error
	} = ProductArraySchema.safeParse(data.products);

	if (!success) throw new Error(z.prettifyError(error));

	return parsedData;
};
