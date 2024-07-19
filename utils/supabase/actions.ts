import { createClient } from './client';

export const getAllFAQs = async () => {
	const client = createClient();
	const { data, error } = await client.from('faq').select('*');
	if (error) {
		console.error(error);
		throw new Error('Failed to fetch FAQs');
	}
	console.log(data);
	return data;
};
