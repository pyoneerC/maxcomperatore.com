import { PythonLogo } from "~/components/Svg/PythonLogo"
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo"
import { UnityLogo } from "~/components/Svg/UnityLogo"
import { UnrealLogo } from "~/components/Svg/UnrealEngineLogo"
import { CsharpLogo } from "~/components/Svg/CsharpLogo"
import CppLogo from "~/components/Svg/CppLogo"
import { RedisLogo } from "~/components/Svg/RedisLogo"
import { DockerLogo } from "~/components/Svg/DockerLogo"

export const skills = [
	// Backend skills
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#F4C430", // Gold-Yellow, less aggressive but visible
		tooltip: "A versatile language for data analysis, automation, and web apps.",
		colors: ["#FFD445", "#FFE17D", "#FFCC00"],
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#0A91D3", // A bright but slightly desaturated blue
		tooltip: "Deploys apps in isolated containers for consistent performance.",
		colors: ["#099CEC", "#00ADEF", "#0077B5"],
	},
	{
		name: "Azure",
		icon: <RedisLogo />,
		brandColor: "#0074C6", // Vibrant but slightly darker Azure blue
		tooltip: "Microsoft’s cloud for scalable apps, AI, and data solutions.",
		colors: ["#34BDEE", "#0078D4", "#00599C"],
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#2F5D88", // Medium-dark blue to maintain contrast
		tooltip: "Powerful database for managing complex data securely and reliably.",
		colors: ["#336791", "#4179A4", "#1A4D8F"],
	},
	{
		name: "DotNet",
		icon: <CsharpLogo />,
		brandColor: "#5C2D91", // Deeper purple that keeps good contrast
		tooltip: "Framework for building scalable, enterprise-grade applications.",
		colors: ["#512BD4", "#683AB7", "#3C1E70"],
	},
	// Game development skills
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "#4D4D4D", // Stronger gray to create better visibility
		tooltip: "Platform for developing interactive 2D and 3D gaming experiences.",
		colors: ["#818181", "#A0A0A0", "#5C5C5C"],
	},
	{
		name: "Unreal",
		icon: <UnrealLogo />,
		brandColor: "#444444", // Similar to Unity but slightly darker
		tooltip: "Engine for high-quality, immersive 3D worlds and game environments.",
		colors: ["#818181", "#9E9E9E", "#616161"],
	},
	{
		name: "React",
		icon: <CppLogo />,
		brandColor: "#4AB3F4", // A well-balanced bright blue for React
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
		colors: ["#61DAFB", "#2196F3", "#0D47A1"],
	},
];
