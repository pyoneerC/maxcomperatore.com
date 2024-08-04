import styles from "./MoonMask.module.css";

export const MoonMask = () => {
	return (
		<mask className={styles.moon} id="moon-mask">
			<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
			<circle cx="24" cy="10" r="6" fill="black"></circle>
		</mask>
	);
};
