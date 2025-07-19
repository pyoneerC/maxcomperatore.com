import { DockerLogo } from "~/components/Svg/DockerLogo";
import { JavaLogo } from "~/components/Svg/JavaLogo";
import { MongoDBLogo } from "~/components/Svg/MongoDBLogo";
import { NextJsLogo } from "~/components/Svg/NextJsLogo";
import { PostgresqlLogo } from "~/components/Svg/PostgresqlLogo";
import { ReactLogo } from "~/components/Svg/ReactLogo";
import { SpringBootLogo } from "~/components/Svg/SpringBootLogo";
import { TypeScriptLogo } from "~/components/Svg/TypeScriptLogo";

export const skills = [
	{
		name: "Java",
		icon: <JavaLogo />,
		brandColor: "#f89820",
		tooltip: "Robust, object-oriented language used for cross-platform applications, backend services, and enterprise systems.",
		colors: ["#f89820", "#5382a1"]
	},
	{
		name: "SpringBoot",
		icon: <SpringBootLogo />,
		brandColor: "#8BC34A",
		tooltip: "Framework built on Java for rapidly developing scalable, production-ready backend services and microservices.",
		colors: ["#8BC34A", "#76A63F", "#9DDD54"],
	},
	{
		name: "Docker",
		icon: <DockerLogo />,
		brandColor: "#00b8ff",
		tooltip: "Deploys apps in isolated containers for consistent performance.",
		colors: ["#099CEC", "#00ADEF", "#0077B5"],
	},
	{
		name: "PostgreSQL",
		icon: <PostgresqlLogo />,
		brandColor: "#008bb9",
		tooltip: "Advanced open-source relational database known for reliability, SQL compliance, and extensibility.",
		colors: ["#0064a5", "#336791", "#008bb9"],
	},
	{
		name: "React",
		icon: <ReactLogo />,
		brandColor: "#11bfed",
		tooltip: "Library for creating fast, interactive user interfaces for web apps.",
		colors: ["#61DAFB", "#2196F3", "#0D47A1"],
	},
	{
		name: "NextJS",
		icon: <NextJsLogo />,
		brandColor: "#5e72e4",
		tooltip: "React framework focused on server-side rendering and static generation.",
		colors: ["#172b4d", "#f4f5f7", "#5e72e4"],
	},
	{
		name: "TypeScript",
		icon: <TypeScriptLogo />,
		brandColor: "#358ef1",
		tooltip: "Strongly typed language that builds on JavaScript for large-scale applications.",
		colors: ["#3178c6", "#235a97", "#00273f"],
	},
	{
		name: "MongoDB",
		icon: <MongoDBLogo />,
		brandColor: "#4DB33D",
		tooltip: "NoSQL database for flexible and scalable document storage.",
		colors: ["#3FA037", "#E8E7D5", "#3F3E42", "#C1BEBC"],
	},
];
