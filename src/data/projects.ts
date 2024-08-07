import type { CoverProject } from "~/types"
import { Tag } from "./tags"

export const projectMetadata = {
	mercadolibrepricechart: {
		slug: "mercadolibrepricechart",
		name: "Mercadix",
	},
	monedasAPI: {
		slug: "monedasAPI",
		name: "ArgentoFX",
	},
	TheDungeon: {
		slug: "the-dungeon",
		name: "Ephemera",
	},
}

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.mercadolibrepricechart,
		imageUrl: `/assets/images/projects/cover/mercadolibre.avif`,
		description: "Visualiza un histograma de precios en vivo para cualquier producto en MercadoLibre.",
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
			"Juego de puzzles que presenta acertijos desafiantes en un entorno maquiavélico."
	},
]

export const projects = [
	{
		...projectMetadata.mercadolibrepricechart,
		index: 0,
		description:
			"Aplicación web que permite consultar precios de productos en MercadoLibre y visualizarlos en un histograma.\n Utiliza web scraping para obtener los precios, la API ArgentoFX (desarrollada por mí) para el tipo de cambio actualizado a dólares, y Matplotlib para generar gráficos claros y concisos que representan eficazmente la variabilidad de los precios.",
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
			"Servicio web robusto desarrollado con FastAPI, especializado en tasas de cambio para el mercado argentino, incluyendo USD, Euro y Real Brasileño.\n\n Implementa extracción de datos en tiempo real y almacenamiento en Redis para garantizar respuestas en menos de 500 ms. Accesible a través del protocolo RESTful y diseñado para la eficiencia y la escalabilidad.",
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
				url: "https://maxcomperatore.online/docs",
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
			"Te encuentras atrapado en un lugar que parece una oficina, pero algo no cuadra. El ambiente es perturbador.\n Con sólo tu ingenio y algunas herramientas esporádicas, debes enfrentarte a una serie de acertijos y rompecabezas diseñados para poner a prueba tu astucia.\n ¿Serás capaz de encontrar una salida a esta pesadilla?",
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
]
