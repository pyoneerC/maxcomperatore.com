import { coverProjects } from "~/data/projects";
import { ProjectCard } from "~/components/ProjectCard";
import styles from "./ProjectsSection.module.css";
import { useTranslations } from "next-intl";

export const ProjectsSection = () => {
	const t = useTranslations("ProjectsSection");
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>
				{t("title")}
			</h2>
			<p className={styles.subtitle}>
				if pc {
				"hover over the cards to see them in color"
			} else {
				"press the cards to see them in color"
			}
			</p>
			<div className={styles.projectsWrapper}>
				{coverProjects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
				<div className={"styles.button-wrapper"}>
					<a href="/iniciativas" className={styles.link}>
						{t("seemore")}
						<div className={styles.icon}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-code-plus">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M9 12h6" />
							<path d="M12 9v6" />
							<path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
							<path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
						</svg>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};
