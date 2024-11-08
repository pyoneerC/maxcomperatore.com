"use client"

import { SetStateAction, useState } from "react"
import { skills } from "~/data/skills"
import { SkillCard } from "~/components/SkillCard"
import styles from "./SkillsSection.module.css"
import { useTranslations } from "next-intl"

export const SkillsSection = () => {
	const t = useTranslations("SkillsSection")
	const [currentTooltip, setCurrentTooltip] = useState("") // State to store the current tooltip

	const handleMouseEnter = (tooltip: SetStateAction<string>) => {
		setCurrentTooltip(tooltip)
	}

	const handleMouseLeave = () => {
		setCurrentTooltip("")
	}

	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>
				{t("title")}
			</h2>
			<div className={styles.skillWrapper}>
				{skills.map((skill) => (
					<SkillCard
						key={skill.name}
						{...skill}
						onMouseEnter={() => handleMouseEnter(t(skill.name))}
						onMouseLeave={handleMouseLeave}
					/>
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
				{currentTooltip || t("defaultDescription")} {/* Default description if no skill is hovered */}
			</p>
		</section>
	)
}

export default SkillsSection
