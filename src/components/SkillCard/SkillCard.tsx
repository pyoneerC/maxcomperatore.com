import styles from "./SkillCard.module.css"

interface Props {
	icon: React.ReactNode
	brandColor: string
	name: string
}

export const SkillCard: React.FC<Props> = ({ icon, brandColor, name }) => {
	const customProperties = { "--color-brand": brandColor } as React.CSSProperties

	return (
		<span className={styles.card} style={customProperties}>
			<div className={styles.wrapper}>
				<div className={styles.iconWrapper}>{icon}</div>
				<span className={styles.skillName}>{name}</span>
			</div>
		</span>
	)
}
