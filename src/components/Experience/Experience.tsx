import { experience } from "~/data/background"
import { BackgroundCard } from "~/components/BackgroundCard"
import styles from "./Experience.module.css"
import { useTranslations } from "next-intl"
export const Experience = () => {
	const t = useTranslations("Experience")
	return (
		<div data-name="experience" className={styles.experience}>
			<h3>{t("experience")}</h3>
			<div className={styles.experiencesList}>
				{experience.map((experienceData, index) => (
					<BackgroundCard key={index} data={experienceData} />
				))}
			</div>
		</div>
	)
}