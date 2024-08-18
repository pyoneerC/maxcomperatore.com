import type { CoverProject } from "~/types"
import { Tag } from "./tags"

export const projectMetadata = {
	mercadolibrepricechart: {
		slug: "mercadolibrepricechart",
		name: "Mercadix",
	},
	monedasAPI: {
		slug: "monedasAPI",
		name: "BlinkLink",
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
		i18nDescriptionKey: "mercadolibrepricechart.description",
	},
	{
		...projectMetadata.monedasAPI,
		imageUrl: `/assets/images/projects/cover/blinklink.avif`,
		i18nDescriptionKey: "monedasAPI.description",
	},
	{
		...projectMetadata.TheDungeon,
		imageUrl: `/assets/images/projects/cover/thedungeon.avif`,
		i18nDescriptionKey: "TheDungeon.description",
	},
]

export const projects = [
	{
		...projectMetadata.mercadolibrepricechart,
		index: 0,
		description: "mercadolibrepricechart.about",
		mobileImages:
			[
				`/assets/images/projects/mercadolibre/mercadolibrepcmobile.avif`,
				`/assets/images/projects/mercadolibre/mercadolibrepchistograma.avif`,
				`/assets/images/projects/mercadolibre/mercadolibrepcmac.avif`,
			],
		desktopImages:
			[
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
		description: "monedasAPI.about",
		mobileImages:
			[
				`/assets/images/projects/monedasapi/postman.gif`,
				`/assets/images/projects/monedasapi/mac.avif`,
			],
		desktopImages:
			[
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
		description: "TheDungeon.about",
		mobileImages:
			[
				`/assets/images/projects/thedungeon/library.avif`,
				`/assets/images/projects/thedungeon/thedungeon.gif`,
				`/assets/images/projects/thedungeon/pistol.avif`,
			],
		desktopImages: [
			`/assets/images/projects/thedungeon/streamer.avif`,
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
