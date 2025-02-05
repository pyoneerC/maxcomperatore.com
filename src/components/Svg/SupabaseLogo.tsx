import type { SVGProps } from "react";

export const SupabaseLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={55}
		height={55}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="icon icon-tabler icons-tabler-outline icon-tabler-brand-supabase"
		{...props}
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 14h8v7l8 -11h-8v-7z" />
	</svg>
);
