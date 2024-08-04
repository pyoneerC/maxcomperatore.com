import type { Post } from "~/types";
import { readdirSync } from "fs";

export const getPosts = async (): Promise<Post[]> => {
	const slugs = readdirSync(`./src/app/(with-footer)/blog/(posts)`, { withFileTypes: true }).filter(
		(dirent) => dirent.isDirectory()
	);

	const posts = await Promise.all(
		slugs.map(async ({ name }) => {
			const { metadata } = await import(`/src/app/(with-footer)/blog/(posts)/${name}/page.mdx`);

			return { slug: name, ...metadata };
		})
	);

	return posts;
};
