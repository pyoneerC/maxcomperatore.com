import styles from "./page.module.css";
import ScrollToTopButton from "~/components/ScrollToTopButton/ScrollToTopButton";
import { coverProjects } from "~/data/otherprojects";
import { ProjectCard } from "~/components/OtherProjectCard";
import { useTranslations } from "next-intl";

export const metadata = {
	title: "Joaquín Olivero - Otros proyectos",
	description: "Proyectos personales de Joaquín Olivero."
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
						<a
							key={project.name}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.projectLink}
						>
							<div className={styles.projectCard}>
								<ProjectCard {...project} />
								<div className={styles.tags}>
									{project.tags?.map((tag) => (
										<span key={tag} className={styles.tag}>{tag}</span>
									))}
								</div>
							</div>
						</a>
					))}
				</div>
				<ScrollToTopButton />
			</section>
		</main>
	);
}
