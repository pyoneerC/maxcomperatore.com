import type { BackgroundData } from "~/data/background"
import { ArrowUpRight } from "~/components/Svg/ArrowUpRight"
import styles from "./BackgroundCard.module.css"
import { useTranslations } from "next-intl"

interface Props {
	data: BackgroundData
	isExperience?: boolean
}

export const BackgroundCard: React.FC<Props> = ({ data, isExperience = true }) => {
	const t = useTranslations("Experience")

	const { role, years, siteName, siteUrl, inRemote } = data

	const showBadge = isExperience ? (inRemote ? t("remote") : t("hybrid")) : null

	return (
		<div className={styles.card}>
			<div className={styles.years}>
				{years}
			</div>
			<div>
				<h4>{role}</h4>
				{isExperience ? (
					<div className={styles.siteData}>
						<a
							className={styles.siteLink}
							href={siteUrl}
							target="_blank"
						>
							{siteName}
							<ArrowUpRight width="18" height="18" strokeWidth="1.5" />
						</a>
						{showBadge && (
							<div className={styles.badge}>{showBadge}</div>
						)}
					</div>
				) : (
					<div className={styles.siteName}>{siteName}</div>
				)}
			</div>
		</div>
	)
}
