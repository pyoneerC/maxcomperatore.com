import { projects } from "~/data/projects";

export const getProjectBySlug = (slug: string) => {
	return projects.find((project) => project.slug === slug);
};

export const getPrevAndNextProjectSlug = (index: number) => {
	const projectsLength = projects.length;
	const prevIndex = (index - 1 + projectsLength) % projectsLength;
	const nextIndex = (index + 1) % projectsLength;

	return [projects[prevIndex].slug, projects[nextIndex].slug];
};
