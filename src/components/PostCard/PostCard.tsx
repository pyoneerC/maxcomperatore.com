import type { Post } from "~/types"
import NextLink from "next/link"
import styles from "./PostCard.module.css"
import { useTranslations } from "next-intl"
import { ArrowUpRight } from "~/components/Svg/ArrowUpRight"

interface Props extends Post {}

export const PostCard: React.FC<Props> = ({ slug, title, description, emoji }) => {
	const t = useTranslations("Blog")

	return (
		<article className={styles.card}>
			<NextLink className={styles.linkWrapper} href={slug}></NextLink>
			<div className={styles.infoWrapper}>
				<h3 className={styles.title}>
					{t(title)}
					<ArrowUpRight className={styles.icon} />
				</h3>
				<p>{t(description)}</p>
			</div>
			<span className={styles.emoji}>{emoji}</span>
		</article>
	)
}
