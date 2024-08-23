import type { Post } from "~/types"
import NextLink from "next/link"
import styles from "./PostCard.module.css"
import {useTranslations} from "next-intl"

interface Props extends Post {}

export const PostCard: React.FC<Props> = ({ slug, title, description, emoji }) => {
	const href = `/blog/${slug}`
	const t = useTranslations("Blog")

	return (
		<article className={styles.card}>
			<NextLink className={styles.linkWrapper} href={href}></NextLink>
			<div className={styles.infoWrapper}>
				<h3 className={styles.title}>{t(title)}</h3>
				<p>{description}</p>
			</div>
			<span className={styles.emoji}>{emoji}</span>
		</article>
	)
}
