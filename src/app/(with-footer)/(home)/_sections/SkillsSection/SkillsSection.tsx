import { skills } from "~/data/skills"
import { SkillCard } from "~/components/SkillCard"
import styles from "./SkillsSection.module.css"
import { useTranslations } from "next-intl"

export const SkillsSection = () => {
	const t = useTranslations("SkillsSection")
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>
				{t("title")}
			</h2>
			<div className={styles.skillWrapper}>
				{skills.map((skill) => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
			<div className={styles.container}>
				<div className={styles.arrowwave}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<p className={styles.description}>
				Framework for building scalable, enterprise-grade applications.
			</p>
		</section>
	)
}
