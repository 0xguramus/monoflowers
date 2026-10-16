import { getCollection } from 'astro:content';
export const getPosts = async () => (await getCollection('blog', p => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
