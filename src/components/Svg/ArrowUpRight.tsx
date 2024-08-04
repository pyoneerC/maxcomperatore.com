import { SVGProps } from "react";

export const ArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		viewBox="0 0 24 24"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<path d="M17 7 7 17M8 7h9v9" />
	</svg>
);
