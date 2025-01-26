import React from 'react'
import styles from './AboutSection.module.css'
import {useTranslations} from "next-intl"
import { Experience } from "~/components/Experience"

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
						style={{
							objectFit: "cover", // Ensures the image fills the container without distortion
						}}
					/>
				</div>
				<div className={styles.textWrapper}>
					<p className={styles.paragraph}>
						{t.rich('d0', {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>
						})}
					</p>
					<p className={styles.paragraph}>
						{t.rich('d1', {
							strong: (children) => <strong>{children}</strong>
						})}
					</p>
					<p className={styles.paragraph}>
						{t.rich('d2', {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>
						})}
					</p>
					<p className={styles.paragraph}>
						{t.rich('d3', {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>
						})}
					</p>
				</div>
			</div>
			<div
				style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "8vh", marginTop: "6rem", marginBottom: "2rem" }}>
				<Experience />
			</div>

		</section>
	)
}
