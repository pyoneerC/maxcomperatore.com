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
					<p>
						• Desarrollo y programación de videojuegos<br />
						• Desarrollo Backend
					</p>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>Medios Digitales:</div>
					<p>
						• Creación de contenido<br />
						• SEO y optimización de páginas web
					</p>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>Otros:</div>
					<p>
						• Entrevistas informativas<br />
						• Traducciones (Inglés, Español)
					</p>
				</div>
			</div>
			<CopyEmailButton />
		</section>
	)
}
