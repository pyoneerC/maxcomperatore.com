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
	calculadorarendimientosmercadopago: {
		slug: "calculadorarendimientosmercadopago",
		name: "Calculadora de Rendimientos MercadoPago",
	},
	pixelateddrift: {
		slug: "pixelateddrift",
		name: "Blackout Boulevard",
	},
	portfolio: {
		slug: "portfolio",
		name: "Portfolio",
	},
	HillClimbRacing: {
		slug: "hillclimbracingclone",
		name: "Hill Climb Racing Clone",
	},
	thegreatchocolatecaper: {
		slug: "thegreatchocolatecaper",
		name: "The Great Chocolate Caper",
	},
}

export const coverProjects: CoverProjectOther[] = [
	{
		...projectMetadata.HillClimbRacing,
		imageUrl: `/assets/images/projects/otherprojectscover/hcr.avif`,
		description: "hcr",
		tags: [Tag.unity, Tag.cSharp],
		link: "https://github.com/pyoneerC/Hill-Climb-Racing"
	},
	{
		...projectMetadata.arrayutils,
		imageUrl: `/assets/images/projects/otherprojectscover/arrayutils.avif`,
		description: "arrayutils",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://github.com/pyoneerC/Array-Utils"
	},
	{
		...projectMetadata.thegreatchocolatecaper,
		imageUrl: `/assets/images/projects/otherprojectscover/thegreatchocolatecaper.avif`,
		description: "tgcp",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://github.com/pyoneerC/The-Great-Chocolate-Caper"
	},
	{
		...projectMetadata.pixelateddrift,
		imageUrl: `/assets/images/projects/otherprojectscover/pixelateddrift.avif`,
		description: "pd",
		tags: [Tag.unrealEngine, Tag.cPlusPlus, Tag.blueprints],
		link: "https://pyoneerc1.itch.io/pixelateddrift"
	},
	{
		...projectMetadata.calculadorarendimientosmercadopago,
		imageUrl: `/assets/images/projects/otherprojectscover/calculadorarendimientosmercadopago.avif`,
		description: "crmp",
		tags: [Tag.javascript, Tag.html, Tag.css],
		link: "https://pyoneerc.github.io/rendimientos-mercado-pago/"
	},
	{
		...projectMetadata.unrealengineprojectcleaner,
		imageUrl: `/assets/images/projects/otherprojectscover/unrealengineprojectcleaner.avif`,
		description: "uepc",
		tags: [Tag.powershell, Tag.cli],
		link: "https://github.com/pyoneerC/Unreal-Engine-Project-Cleaner"
	},
]