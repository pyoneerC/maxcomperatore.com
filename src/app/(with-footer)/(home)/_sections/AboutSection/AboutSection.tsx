"use client"

import React, { useEffect } from "react";
import styles from "./AboutSection.module.css";
import { useTranslations } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import { Experience } from "~/components/Experience"

export const AboutSection = () => {
	const t = useTranslations("AboutSection");

	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "30min" });
			cal("floatingButton", {
				calLink: "maximo-comperatore/30min",
				config: { layout: "month_view" },
				hideButtonIcon: false,
				buttonPosition: "bottom-left",
				buttonText:"Let's Talk"
			});
			cal("ui", {
				hideEventTypeDetails: false,
				layout: "month_view",
			});
		})();
	}, []);

	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>{t("title")}</h2>

			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper}>
					<img
						src="/assets/images/maximo_comperatore.avif"
						alt="Maximo Comperatore"
						className={styles.photo}
						loading="lazy"
						width={300}
						height={300}
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
				<div className={styles.textWrapper}>
					<p className={styles.paragraph}>
						{t.rich("d0", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
					<p className={styles.paragraph}>
						{t.rich("d1", {
							strong: (children) => <strong>{children}</strong>,
						})}
					</p>
					<p className={styles.paragraph}>
						{t.rich("d2", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
					<p className={styles.paragraph}>
						{t.rich("d3", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
				</div>
			</div>

			<div className={styles.experienceWrapper}>
				<Experience />
			</div>
		</section>
	);
};
