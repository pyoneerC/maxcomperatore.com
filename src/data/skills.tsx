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
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#099CEC",
	},
	{
		name: "Azure",
		icon: <RedisLogo />,
		brandColor: "#34BDEE",
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
		name: "DotNet",
		icon: <CsharpLogo />,
		brandColor: "#512BD4",
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
		name: "React",
		icon: <CppLogo />,
		brandColor: "#61DAFB",
	},
]
