import { skills } from "~/data/skills";
import { SkillCard } from "~/components/SkillCard";
import styles from "./SkillsSection.module.css";

export const SkillsSection = () => {
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>Tecnologías empleadas recientemente</h2>
			<div className={styles.skillWrapper}>
				{skills.map((skill) => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
		</section>
	);
};
