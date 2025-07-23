import type { CoverProject } from "~/types";

import { Tag } from "./tags";

export const projectMetadata = {
	Deporturnos: {
		slug: "deporturnos",
		name: "Deporturnos",
	},
	ProductManager: {
		slug: "product-manager",
		name: "Product Manager",
	},
	Poui: {
		slug: "poui",
		name: "Poui",
	},
	TaskList: {
		slug: "task-list",
		name: "Task List",
	}
};

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.Deporturnos,
		imageUrl: "/assets/images/projects/deporturnos/home-depo.avif",
		i18nDescriptionKey: "Deporturnos.description",
	},
	{
		...projectMetadata.ProductManager,
		imageUrl: "/assets/images/projects/productmanager/home.avif",
		i18nDescriptionKey: "ProductManager.description",
	},
	{
		...projectMetadata.Poui,
		imageUrl: "/assets/images/projects/poui/home-poui.avif",
		i18nDescriptionKey: "Poui.description",
	},
	{
		...projectMetadata.TaskList,
		imageUrl: "/assets/images/projects/tasklist/home-tasklist.avif",
		i18nDescriptionKey: "TaskList.description",
	},
];

export const projects = [
	{
		...projectMetadata.Deporturnos,
		index: 0,
		description: "Deporturnos.about",
		mobileImages:
			[
				"/assets/images/projects/deporturnos/deporturnos.gif",
			],
		desktopImages:
			[
				"/assets/images/projects/deporturnos/login.avif",
				"/assets/images/projects/deporturnos/register.avif",
				"/assets/images/projects/deporturnos/homeclient.avif",
			],
		links: [
			{
				label: "Deporturnos.linkVisitSite",
				url: "https://deporturnos-front.vercel.app/",
			},
			{
				label: "Deporturnos.linkViewCode",
				url: "https://github.com/Pulpoide/deporturnos-back",
			},
			{
				label: "Deporturnos.linkViewCode2",
				url: "https://github.com/Pulpoide/deporturnos-front",
			},
			{
				label: "Deporturnos.linkVisitDocs",
				url: "https://deporturnos-back-production.up.railway.app/doc/swagger-ui/index.html",
			},
		],
		tags:
			[
				Tag.java,
				Tag.springboot,
				Tag.ejs,
				Tag.postgreSQL,
				Tag.docker,
			],
	},
	{
		...projectMetadata.ProductManager,
		index: 1,
		description: "ProductManager.about",
		mobileImages:
			[
				"/assets/images/projects/productmanager/productmanager.gif",
			],
		desktopImages:
			[
				"/assets/images/projects/productmanager/home.avif"
			],
		links: [
			{
				label: "ProductManager.linkVisitSite",
				url: "https://aoi2-w2.onrender.com/",
			},
			{
				label: "ProductManager.linkViewCode",
				url: "https://github.com/Pulpoide/aoi2_w2",
			},
			{
				label: "ProductManager.linkVisitDocs",
				url: "https://aoi2-w2.onrender.com/api-docs/",
			},
		],
		tags:
			[
				Tag.javascript,
				Tag.expressjs,
				Tag.mongoDB,
			],
	},
	{
		...projectMetadata.Poui,
		index: 2,
		description: "Poui.about",
		mobileImages:
			[
				"/assets/images/projects/poui/home.gif",
			],
		desktopImages: [
			"/assets/images/projects/poui/catalogo.avif",
			"/assets/images/projects/poui/form.avif",
			"/assets/images/projects/poui/quienessomos.avif",
		],
		links: [
			{
				label: "Poui.linkVisitSite",
				url: "https://poui.netlify.app/",
			},
			{
				label: "Poui.linkViewCode",
				url: "https://github.com/Pulpoide/aoi1_w2",
			},
		],
		tags:
			[
				Tag.javascript,
				Tag.css,
				Tag.html
			],
	},
	{
		...projectMetadata.TaskList,
		index: 3,
		description: "TaskList.about",
		links: [
			{
				label: "TaskList.linkVisitSite",
				url: "https://listatareasjolivero.netlify.app/",
			},
			{
				label: "TaskList.linkViewCode",
				url: "https://github.com/Pulpoide/TaskList",
			}
		],
		mobileImages:
			[
				"/assets/images/projects/tasklist/home-tasklist.avif"
			],
		desktopImages:
			[
				
			],
		tags:
			[
				Tag.javascript,
				Tag.html,
				Tag.css,
			],
	},
];
