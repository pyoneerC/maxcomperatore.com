import type { CoverProject } from "~/types";
import { Tag } from "./tags";

export const projectMetadata = {
	mercadolibrepricechart: {
		slug: "mercadolibrepricechart",
		name: "Mercadografo",
	},
	monedasAPI: {
		slug: "monedasAPI",
		name: "ArgentoFX",
	},
	TheDungeon: {
		slug: "the-dungeon",
		name: "The Forgotten Maze",
	},
};

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.mercadolibrepricechart,
		imageUrl: `/assets/images/projects/cover/mercadolibre.avif`,
		description: "Histograma de precios en tiempo real para cualquier producto de MercadoLibre.",
	},
	{
		...projectMetadata.monedasAPI,
		imageUrl: `/assets/images/projects/cover/monedasapi.avif`,
		description:
			"API RESTful para obtener cotizaciones de divisas extranjeras en vivo, en Argentina.",
	},
	{
		...projectMetadata.TheDungeon,
		imageUrl: `/assets/images/projects/cover/thedungeon.avif`,
		description:
			"Juego de puzzles y terror que combina acertijos desafiantes en un entorno oscuro y misterioso."
	},
];

export const projects = [
	{
		...projectMetadata.mercadolibrepricechart,
		index: 0,
		description:
			"Aplicación web que permite consultar precios de productos en MercadoLibre y visualizarlos en un histograma. Utiliza web scraping para obtener los precios, la API monedas-api (desarrollada por mí) para el tipo de cambio actualizado a dólares, y Matplotlib para generar gráficos claros y concisos que representan eficazmente la variabilidad de los precios.",
		mobileImages:
			[
				`/assets/images/projects/mercadolibre/mercadolibrepcmobile.avif`,
				`/assets/images/projects/mercadolibre/mercadolibrepchistograma.avif`
			],
		desktopImages:
			[
				`/assets/images/projects/mercadolibre/mercadolibrepcmac.avif`,
				`/assets/images/projects/mercadolibre/mercadolibrepcdiagrama.avif`
			],
		links: [
			{
				label: "Visitar sitio",
				url: "https://mercado-libre-price-chart.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/pyoneerC/mercado-libre-price-chart",
			},
		],
		tags:
			[
			Tag.python,
			Tag.flask,
		],
	},
	{
		...projectMetadata.monedasAPI,
		index: 1,
		description:
			"Una servicio web robusto y dinámico desarrollado con FastAPI, que proporciona tasas de cambio de divisas en tiempo real mediante extracción de datos de sitios web financieros. Se centra en tasas de cambio en Argentina, incluyendo USD (blue, oficial, MEP, CCL), Euro, Real Brasileño y más. Desplegada en un servidor web, ofrece acceso remoto a través de solicitudes RESTful.",
		mobileImages:
			[
				`/assets/images/projects/monedasapi/json.avif`,
			],
		desktopImages:
			[
				`/assets/images/projects/monedasapi/mac.avif`,
				`/assets/images/projects/monedasapi/architecturediagram.avif`
			],
		links: [
			{
				label: "Visitar documentación",
				url: "https://fastapiproject-1-eziw.onrender.com/docs",
			},
			{
				label: "Ver código",
				url: "https://github.com/pyoneerC/monedas-api",
			},
		],
		tags:
			[
			Tag.python,
			Tag.fastAPI
		],
	},
	{
		...projectMetadata.TheDungeon,
		index: 2,
		description:
			"Este juego combina terror y puzzles, ofreciendo acertijos complejos, una atmósfera siniestra y música envolvente. Diseñado con el objetivo de aprender y mejorar habilidades en desarrollo de juegos, ¿podrás superar todos los desafíos y sobrevivir para ver el final?",
		mobileImages:
			[
				`/assets/images/projects/thedungeon/library.avif`,
				`/assets/images/projects/thedungeon/thedungeon.gif`
			],
		desktopImages: [
			`/assets/images/projects/thedungeon/streamer.avif`,
			`/assets/images/projects/thedungeon/pistol.avif`,
		],
		links: [
			{
				label: "Ver en itch.io",
				url: "https://pyoneerc1.itch.io/the-dungeon",
			},
			{
				label: "Ver vídeos del juego",
				url: "https://www.youtube.com/playlist?list=PLRFx0xkqiuISCnQBv0af1v3Kn7fOHcoLT",
			},
		],
		tags:
		[
			Tag.unrealEngine,
			Tag.blueprints,
			Tag.cPlusPlus
		],
	},
];
