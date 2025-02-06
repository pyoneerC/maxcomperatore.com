import { CoverProjectOther } from "~/types"
import { Tag } from "./tags"

export const projectMetadata = {
	unrealengineprojectcleaner: {
		slug: "mercadolibrepricechart",
		name: "Unreal Engine Project Cleaner",
	},
	arrayutils: {
		slug: "arrayutils",
		name: "Array Utils",
	},
	hangman: {
		slug: "hangman",
		name: "Hangman",
	},
	argentofx: {
		slug: "argentofx",
		name: "ArgentoFX",
	},
	pixelateddrift: {
		slug: "pixelateddrift",
		name: "Mercadix",
	},
	portfolio: {
		slug: "portfolio",
		name: "Portfolio",
	},
	HillClimbRacing: {
		slug: "hillclimbracingclone",
		name: "Hill Climb Racing",
	},
	thegreatchocolatecaper: {
		slug: "thegreatchocolatecaper",
		name: "0xwik1tr0n",
	},
	roadmapsh: {
		slug: "roadmapsh",
		name: "Roadmap.sh",
	},
}

export const coverProjects: CoverProjectOther[] = [
	{
		...projectMetadata.pixelateddrift,
		imageUrl: `/assets/images/projects/cover/mercadolibre.avif`,
		description: "mercadix",
		tags: [Tag.python, Tag.flask, Tag.html],
		link: "https://maxcomperatore.store/"
	},
	{
		...projectMetadata.thegreatchocolatecaper,
		imageUrl: `/assets/images/projects/otherprojectscover/thegreatchocolatecaper.avif`,
		description: "tgcp",
		tags: [Tag.python, Tag.pytorch, Tag.huggingface],
		link: "https://github.com/pyoneerC/0xwik1tr0n"
	},
	{
		...projectMetadata.HillClimbRacing,
		imageUrl: `/assets/images/projects/otherprojectscover/hcr.avif`,
		description: "hcr",
		tags: [Tag.unity, Tag.cSharp],
		link: "https://github.com/pyoneerC/Hill-Climb-Racing"
	},
	{
		...projectMetadata.argentofx,
		imageUrl: `/assets/images/projects/cover/monedasapi.avif`,
		description: "afx",
		tags: [Tag.python, Tag.redis, Tag.docker],
		link: "https://publicapi.dev/argento-fx-api",
	},
	{
		...projectMetadata.arrayutils,
		imageUrl: `/assets/images/projects/otherprojectscover/arrayutils.avif`,
		description: "arrayutils",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://www.unrealengine.com/marketplace/en-US/product/array-utils"
	},
	{
		...projectMetadata.roadmapsh,
		imageUrl: `/assets/images/projects/otherprojectscover/roadmapsh.avif`,
		description: "roadmapsh",
		link: "https://roadmap.sh"
	},
]