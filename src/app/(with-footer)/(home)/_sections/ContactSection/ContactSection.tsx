import clsx from "clsx"
import { CopyEmailButton } from "~/components/CopyEmailButton"
import styles from "./ContactSection.module.css"
import { useTranslations } from "next-intl"

export const ContactSection = () => {
	const t = useTranslations("ContactSection")

	return (
		<section className={clsx("section-wrapper", styles.section)}>
			<h2 className={styles.title}>
				{t("question")}
			</h2>
			<p className={styles.subtitle}>
				Mis servicios incluyen:
			</p>
			<div className={styles.servicesContainer}>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>Desarrollo:</div>
					<ul>
						<li>Desarrollo y programación de videojuegos</li>
						<li>Desarrollo Backend</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>Medios Digitales:</div>
					<ul>
						<li>Creación de contenido</li>
						<li>SEO y optimización de páginas web</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>Otros:</div>
					<ul>
						<li>Entrevistas informativas</li>
						<li>Traducciones (Inglés, Español)</li>
					</ul>
				</div>
			</div>
			<CopyEmailButton />
		</section>
	)
}
