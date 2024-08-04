import type { SVGProps } from "react";

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		viewBox="0 0 30 30"
		fill="none"
		{...props}
	>
		<g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
			<path d="M15 6.25v17.5M22.5 16.25l-7.5 7.5M7.5 16.25l7.5 7.5" />
		</g>
	</svg>
);
