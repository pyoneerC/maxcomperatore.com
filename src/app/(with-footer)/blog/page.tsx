import { getPosts } from "~/helpers/get-posts"
import { sortPostsByDate } from "~/helpers/sort-posts"
import { PostCard } from "~/components/PostCard"
import styles from "./page.module.css"
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton"
import Link from "next/link"
import React from "react"
import { getTranslations } from "next-intl/server"

export const metadata = {
	title: "Max Comperatore - Blog",
	description: "Tutoriales sobre desarrollo de software y videojuegos.",
}

export default async function Blog() {
	const posts = await getPosts()
	const sortedPosts = sortPostsByDate({ posts })
	const t = await getTranslations("Blog")

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Blog</h1>
			<p className={styles.subtitle}>
				{t("subtitle")}
			</p>
			<Link className={styles.goHomeLink} href="/">
				<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
					<path fill="currentColor" d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75" />
				</svg>
				{t("home")}
			</Link>
			<Link className={styles.goHomeLink} href="/faq">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
						 className="lucide lucide-circle-help">
					<circle cx="12" cy="12" r="10" />
					<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
					<path d="M12 17h.01" />
				</svg>
				{t("faq")}
			</Link>
			<div className={styles.separator} />
			<div className={styles.postsWrapper}>
				{sortedPosts.map((post) => (
					<PostCard key={post.slug} {...post} />
				))}
			</div>
			<ScrollToTopButton />
		</main>
	)
}
