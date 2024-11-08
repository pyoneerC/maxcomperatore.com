import styles from "./SkillCard.module.css"

interface Props {
	icon: React.ReactNode
	brandColor: string
	name: string
	onMouseEnter: () => void // Triggered when hovering
	onMouseLeave: () => void // Triggered when hover ends
}

export const SkillCard: React.FC<Props> = ({ icon, brandColor, name, onMouseEnter, onMouseLeave }) => {
	const customProperties = { "--color-brand": brandColor } as React.CSSProperties

	return (
		<span
			className={styles.card}
			style={customProperties}
			onMouseEnter={onMouseEnter} // Call when mouse enters
			onMouseLeave={onMouseLeave} // Call when mouse leaves
		>
			<div className={styles.wrapper}>
				<div className={styles.iconWrapper}>{icon}</div>
				<span className={styles.skillName}>{name}</span>
			</div>
		</span>
	)
}
