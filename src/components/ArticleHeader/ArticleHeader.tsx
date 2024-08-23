import { localFormatDate } from "~/helpers/local-format-date"
import { Link } from "~/components/Ui/Link"
import styles from "./ArticleHeader.module.css"
import React from "react"
import { useTranslations} from "next-intl"

interface Props {
	title: string
	date: string
}

export const ArticleHeader: React.FC<Props> = ({ title, date }) => {
	const t = useTranslations("Blog")

	return (
		<div className={styles.wrapper}>
			<Link className={styles.goHomeLink} href="/blog">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
					<g fill="none" stroke="currentColor" strokeWidth="4">
						<path strokeLinecap="round" strokeLinejoin="round"
									d="M24 21v23c-3.291-4-13.371-4-18-4V18c9.874 0 16.114 2 18 3m0 0v23c3.291-4 13.371-4 18-4V18c-9.874 0-16.114 2-18 3" />
						<circle cx="24" cy="12" r="8" />
					</g>
				</svg>
				{t("blog")}
			</Link>
			<h1 className={styles.title}>{t(title)}</h1>
			<span className={styles.date}>{t(date)} </span>
		</div>
	)
}
