import clsx from "clsx";
import { CopyEmailButton } from "~/components/CopyEmailButton";
import styles from "./ContactSection.module.css";

export const ContactSection = () => {
	return (
		<section className={clsx("section-wrapper", styles.section)}>
			<h2 className={styles.title}>
				<span>¿Quieres iniciar un proyecto?</span>
			</h2>
			<CopyEmailButton />
		</section>
	);
};
