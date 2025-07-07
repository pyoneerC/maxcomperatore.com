import type { MetadataRoute } from "next";
import { HOST_URL, APP_ROUTES } from "~/constants";
import { projects } from "~/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
	const currentDate = new Date().toISOString().split("T")[0];

	// const routes = APP_ROUTES.map(({ href }) => ({
	// 	url: `${HOST_URL}${href}`,
	// 	lastModified: currentDate,
	// 	changefreq: "monthly",
	// 	priority: 0.8,
	// }));

	const projectRoutes = projects.map(({ slug }) => ({
		url: `${HOST_URL}/project/${slug}`,
		lastModified: currentDate,
		changefreq: "weekly",
		priority: 0.7,
	}));

	const homepage = {
		url: `${HOST_URL}/`,
		lastModified: currentDate,
		changefreq: "daily",
		priority: 1.0,
	};

	return [homepage, ...projectRoutes];
}
