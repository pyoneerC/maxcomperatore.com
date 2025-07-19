import { MoonMask } from "./MoonMask";

export const SvgMasks = () => {
	return (
		<svg
			style={{
				position: "absolute",
				overflow: "hidden",
				pointerEvents: "none",
			}}
			aria-hidden="true"
		>
			<defs>
				<MoonMask />
			</defs>
		</svg>
	);
};
