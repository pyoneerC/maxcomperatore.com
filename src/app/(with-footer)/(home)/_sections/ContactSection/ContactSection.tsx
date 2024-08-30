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
					<div className={styles.serviceCategory}>{t("servicesDigitalMarketing")}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-social">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
							<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
							<path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
							<path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
							<path d="M12 7l0 4" />
							<path d="M6.7 17.8l2.8 -2" />
							<path d="M17.3 17.8l-2.8 -2" />
						</svg>
					</div>
					<ul>
						<li>{t("servicesContentCreation")}</li>
						<li>{t("servicesSEO")}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>{t("servicesDevelopment")}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								 style={{ verticalAlign: "text-bottom" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M10 14l-2 -2l2 -2" />
							<path d="M14 10l2 2l-2 2" />
							<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
						</svg>
					</div>
					<ul>
						<li>{t("gameDevelopment")}</li>
						<li>{t("backendDevelopment")}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceCategory}>{t("servicesOther")}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-keyframes">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path
								d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
							<path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
							<path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
						</svg>
					</div>
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
