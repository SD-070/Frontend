import { z } from 'zod/v4';

export const ProductSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	thumbnail: z.url({
		protocol: /^https?$/,
		hostname: z.regexes.domain
	})
});

export const ProductArraySchema = z.array(ProductSchema);
