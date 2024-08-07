import { PythonLogo } from "~/components/Svg/PythonLogo"
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo"
import { TypescriptLogo } from "~/components/Svg/TypeScriptLogo"
import { UnityLogo } from "~/components/Svg/UnityLogo"
import { UnrealLogo } from "~/components/Svg/UnrealEngineLogo"
import { CsharpLogo } from "~/components/Svg/CsharpLogo"
import CppLogo from "~/components/Svg/CppLogo"
import { RedisLogo } from "~/components/Svg/RedisLogo"

export const skills = [
	// Backend skills
	{
		name: "Python",
		icon: <PythonLogo />,
		brandColor: "#FFD445",
	},
	{
		name: "TypeScript",
		icon: <TypescriptLogo />,
		brandColor: "#3178C6",
	},
	{
		name: "Redis",
		icon: <RedisLogo />,
		brandColor: "#D8291F",
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#336791",
	},
	//{
	//	name: "MySQL",
	//	icon: <MySQLLogo />,
	//	brandColor: "#00758F",
	//},
	//{
	//	name: "Rust",
	//	icon: <RustLogo />,
	//	brandColor: "#7A4929",
	//},
	// .NET related skills
	//{
	//	name: "DotNet",
	//	icon: <DotNetLogo />,
	//	brandColor: "#5027D5",
	//},
	//{
	//	name: "Azure",
	//	icon: <AzureLogo />,
	//	brandColor: "#007FFF",
	//},
	{
		name: "C#",
		icon: <CsharpLogo />,
		brandColor: "#A27ADD",
	},
	// Game development skills
	{
		name: "Unity",
		icon: <UnityLogo />,
		brandColor: "#818181",
	},
	{
		name: "Unreal",
		icon: <UnrealLogo />,
		brandColor: "#818181",
	},
	{
		name: "C++",
		icon: <CppLogo />,
		brandColor: "#659AD2",
	},
]
