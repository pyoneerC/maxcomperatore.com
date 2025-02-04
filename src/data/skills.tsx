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
		brandColor: "#B1B1B1", // **Dark muted gold (NO bright yellow blending)**
		tooltip: "A versatile language for data analysis, automation, and web apps.",
		colors: ["#FFD445", "#FFE17D", "#FFCC00"],
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#B1B1B1", // **Deep blue-green (No cyan blending)**
		tooltip: "Deploys apps in isolated containers for consistent performance.",
		colors: ["#099CEC", "#00ADEF", "#0077B5"],
	},
	{
		name: "Azure",
		icon: <RedisLogo />,
		brandColor: "#B1B1B1", // **Deep azure blue, completely different from pixel shimmer**
		tooltip: "Microsoft’s cloud for scalable apps, AI, and data solutions.",
		colors: ["#34BDEE", "#0078D4", "#00599C"],
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#B1B1B1", // **Dark indigo, away from the blue shimmer**
		tooltip: "Powerful database for managing complex data securely and reliably.",
		colors: ["#336791", "#4179A4", "#1A4D8F"],
	},
	{
		name: "DotNet",
		icon: <CsharpLogo />,
		brandColor: "#B1B1B1", // **Light gray for high contrast**
		tooltip: "Framework for building scalable, enterprise-grade applications.",
		colors: ["#512BD4", "#683AB7", "#3C1E70"],
	},
	// Game development skills
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "#B1B1B1", // **Near-black gray for high contrast**
		tooltip: "Platform for developing interactive 2D and 3D gaming experiences.",
		colors: ["#818181", "#A0A0A0", "#5C5C5C"],
	},
	{
		name: "Unreal",
		icon: <UnrealLogo />,
		brandColor: "#B1B1B1", // **Darker gray than Unity for subtle separation**
		tooltip: "Engine for high-quality, immersive 3D worlds and game environments.",
		colors: ["#818181", "#9E9E9E", "#616161"],
	},
	{
		name: "React",
		icon: <CppLogo />,
		brandColor: "#B1B1B1", // **Dark navy (No bright cyan blending)**
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
		colors: ["#61DAFB", "#2196F3", "#0D47A1"],
	},
];
