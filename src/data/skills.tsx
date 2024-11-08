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
		brandColor: "#FFD445",
		tooltip: "A versatile language for data analysis, automation, and web apps.",
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#099CEC",
		tooltip: "Deploys apps in isolated containers for consistent performance.",
	},
	{
		name: "Azure",
		icon: <RedisLogo />,
		brandColor: "#34BDEE",
		tooltip: "Microsoft’s cloud for scalable apps, AI, and data solutions.",
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#336791",
		tooltip: "Powerful database for managing complex data securely and reliably.",
	},
	{
		name: "DotNet",
		icon: <CsharpLogo />,
		brandColor: "#512BD4",
		tooltip: "Framework for building scalable, enterprise-grade applications.",
	},
	// Game development skills
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "#818181",
		tooltip: "Platform for developing interactive 2D and 3D gaming experiences.",
	},
	{
		name: "Unreal",
		icon: <UnrealLogo />,
		brandColor: "#818181",
		tooltip: "Engine for high-quality, immersive 3D worlds and game environments.",
	},
	{
		name: "React",
		icon: <CppLogo />,
		brandColor: "#61DAFB",
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
	},
];