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
				{t("services")}
			</p>
			<div className={styles.servicesContainer}>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>{t("servicesDigitalMarketing")}</div>
					<ul>
						<li>{t("servicesContentCreation")}</li>
						<li>{t("servicesSEO")}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>{t("servicesDevelopment")}</div>
					<ul>
						<li>{t("gameDevelopment")}</li>
						<li>{t("backendDevelopment")}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>{t("servicesOther")}</div>
					<ul>
						<li>{t("servicesInformationalInterviews")}</li>
						<li>{t("servicesTranslation")}</li>
					</ul>
				</div>
			</div>
			<CopyEmailButton />
		</section>
	)
}
