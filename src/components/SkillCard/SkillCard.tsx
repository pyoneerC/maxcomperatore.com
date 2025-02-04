import styles from "./SkillCard.module.css";
import "./pixelcanvas";

interface Props {
	icon: React.ReactNode;
	brandColor: string;
	name: string;
	colors: string[]; // Array of colors for the pixel effect
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export const SkillCard: React.FC<Props> = ({
																						 icon,
																						 brandColor,
																						 name,
																						 colors,
																						 onMouseEnter,
																						 onMouseLeave,
																					 }) => {
	const customProperties = { "--color-brand": brandColor } as React.CSSProperties;
	const colorString = colors.join(", "); // Convert array to comma-separated string

	// @ts-ignore
	return (
		<span
			className={styles.card}
			style={customProperties}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<pixel-canvas data-gap="3" data-speed="20" data-colors={colorString}/>

      <div className={styles.wrapper}>
        <div className={styles.iconWrapper}>{icon}</div>
        <span className={styles.skillName}>{name}</span>
      </div>
    </span>
	);
};
