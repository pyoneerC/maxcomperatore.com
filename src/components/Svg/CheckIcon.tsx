import type { SVGProps } from "react";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
    viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={2}
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" />
		<path d="m5 12 5 5L20 7" />
	</svg>
);
