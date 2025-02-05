import { PythonLogo } from "~/components/Svg/PythonLogo"
import { SupabaseLogo } from "~/components/Svg/SupabaseLogo"
import { N8nLogo } from "~/components/Svg/n8nLogo"
import { OpenAILogo } from "~/components/Svg/OpenAILogo"
import { DotNetLogo } from "~/components/Svg/DotNetLogo"
import { ReactLogo } from "~/components/Svg/ReactLogo"
import { AzureLogo } from "~/components/Svg/AzureLogo"
import { DockerLogo } from "~/components/Svg/DockerLogo"

export const skills = [
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#ecc238",
		tooltip: "A versatile language for data analysis, automation, and web apps.",
		colors: ["#eac347", "#FFE17D", "#caa30a", "#FFD700", "#FFDD44", "#F4C542", "#E6B800"]
	},
	{
		name: "n8n",
		icon: <N8nLogo />,
		brandColor: "#EA4B71",
		tooltip: "AI-powered workflow automation with intelligent agents for technical teams.",
		colors: ["#E63964", "#FF5A7B", "#C72D52"],
	},
	{
		name: "OpenAI",
		icon: <OpenAILogo />,
		brandColor: "#10A37F",
		tooltip: "I use the OpenAI API to build intelligent applications, automate tasks, and enhance user experiences.",
		colors: ["#0E7C63", "#15B091", "#087F6D"],
	},
	{
		name: "Azure",
		icon: <AzureLogo />,
		brandColor: "#12c0fd",
		tooltip: "Microsoft’s cloud for scalable apps, AI, and data solutions.",
		colors: ["#34BDEE", "#0078D4", "#00599C"],
	},
	{
		name: "DotNet",
		icon: <DotNetLogo />,
		brandColor: "#6540e8",
		tooltip: "Framework for building scalable, enterprise-grade applications.",
		colors: ["#512BD4", "#683AB7", "#3C1E70"],
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#00b8ff",
		tooltip: "Deploys apps in isolated containers for consistent performance.",
		colors: ["#099CEC", "#00ADEF", "#0077B5"],
	},
	{
		name: "React",
		icon: <ReactLogo />,
		brandColor: "#11bfed",
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
		colors: ["#61DAFB", "#2196F3", "#0D47A1"],
	},
	{
		name: "Supabase",
		icon: <SupabaseLogo />,
		brandColor: "#3ECF8E",
		tooltip: "Open-source Firebase alternative for databases, auth, and storage.",
		colors: ["#2F9E6C", "#3ECF8E", "#249D63"],
	},
];
