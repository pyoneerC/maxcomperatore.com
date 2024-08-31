import { Post } from "~/types"

interface Props {
	posts: Post[]
	descMode?: boolean
}

export const sortPostsByDate = ({ posts, descMode = true }: Props) => {
	if (!posts.length) return []

	return posts.sort((postA, postB) => {
		const dateATime = new Date(postA.publishedOn).getTime()
		const dateBTime = new Date(postB.publishedOn).getTime()
		return descMode ? dateBTime - dateATime : dateATime - dateBTime
	})
}
