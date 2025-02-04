import { PythonLogo } from "~/components/Svg/PythonLogo"
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo"
import { UnityLogo } from "~/components/Svg/UnityLogo"
import { UnrealLogo } from "~/components/Svg/UnrealEngineLogo"
import { CsharpLogo } from "~/components/Svg/CsharpLogo"
import CppLogo from "~/components/Svg/CppLogo"
import { RedisLogo } from "~/components/Svg/RedisLogo"
import { DockerLogo } from "~/components/Svg/DockerLogo"

export const skills = [
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#f8c416",
		tooltip: "A versatile language for data analysis, automation, and web apps.",
		colors: ["#eac347", "#FFE17D", "#caa30a"],
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#00b8ff",
		tooltip: "Deploys apps in isolated containers for consistent performance.",
		colors: ["#099CEC", "#00ADEF", "#0077B5"],
	},
	{
		name: "Azure",
		icon: <RedisLogo />,
		brandColor: "#12c0fd",
		tooltip: "Microsoft’s cloud for scalable apps, AI, and data solutions.",
		colors: ["#34BDEE", "#0078D4", "#00599C"],
	},
	{
		name: "Supabase",
		icon: <PostgreSqlLogo />,
		brandColor: "#3ECF8E",
		tooltip: "Open-source Firebase alternative for databases, auth, and storage.",
		colors: ["#2F9E6C", "#3ECF8E", "#249D63"],
	},
	{
		name: "DotNet",
		icon: <CsharpLogo />,
		brandColor: "#4a15f3",
		tooltip: "Framework for building scalable, enterprise-grade applications.",
		colors: ["#512BD4", "#683AB7", "#3C1E70"],
	},
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "#B1B1B1",
		tooltip: "Platform for developing interactive 2D and 3D gaming experiences.",
		colors: ["#818181", "#A0A0A0", "#5C5C5C"],
	},
	{
		name: "OpenAI",
		icon: <UnrealLogo />,
		brandColor: "#10A37F",
		tooltip: "I use the OpenAI API to build intelligent applications, automate tasks, and enhance user experiences.",
		colors: ["#0E7C63", "#15B091", "#087F6D"],
	},
	{
		name: "React",
		icon: <CppLogo />,
		brandColor: "#11bfed",
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
		colors: ["#61DAFB", "#2196F3", "#0D47A1"],
	},
];
