import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import { coverProjects } from "~/data/otherprojects";
import { ProjectCard } from "~/components/OtherProjectCard";
import { useTranslations } from "next-intl";

export const metadata = {
	title: "Max Comperatore - Otros proyectos",
	description: "Proyectos personales de Max Comperatore."
}

export default function Blog() {
	const t = useTranslations("Initiatives")
	return (
		<main className={styles.wrapper}>
		<section className={styles.projectsWrapper}>
			<h1 className={styles.title}>{t("title")}</h1>
			<p className={styles.paragraph}>
				{t("subtitle")}
			</p>

			<div className={styles.projectsGrid}>
				{coverProjects.map((project) => (
					<div key={project.name} className={styles.projectCard}>
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							<ProjectCard {...project} />
						</a>
						<div className={styles.tags}>
							{project.tags?.map((tag) => (
								<span key={tag} className={styles.tag}>{tag}</span>
							))}
						</div>
					</div>
				))}
			</div>
			<ScrollToTopButton />
		</section>
		</main>
	);
}
