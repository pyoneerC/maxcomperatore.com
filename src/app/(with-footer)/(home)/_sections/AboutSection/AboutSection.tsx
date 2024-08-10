import React from 'react'
import styles from './AboutSection.module.css'
import {useTranslations} from "next-intl"
import { Button } from "~/components/Ui/Button"
import Link from "next/link"

export const AboutSection = () => {
	const t = useTranslations("AboutSection")

	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>
				{t("title")}
			</h2>

			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper}>
					<img
						src="/assets/images/maximo_comperatore.avif"
						alt="Maximo Comperatore"
						className={styles.photo}
						loading="lazy"
						width={300}
						height={300}
					/>
				</div>
				<div className={styles.textWrapper}>
					<p className={styles.paragraph}>
						{t("d0")}
					</p>
					<p className={styles.paragraph}>
						{t("d1")}
					</p>
					<p className={styles.paragraph}>
						{t("d2")}
					</p>
					<Link className={styles.goFAQLink} href="/faq">
						Mas sobre mí&nbsp;
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-info-square-rounded">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M12 9h.01" />
							<path d="M11 12h1v4h1" />
							<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	)
}
