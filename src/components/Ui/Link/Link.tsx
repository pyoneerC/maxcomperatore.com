import clsx from "clsx";
import NextLink from "next/link";

import { ArrowUpRight } from "~/components/Svg/ArrowUpRight";

import styles from "./Link.module.css";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
	href: string
}

export const Link: React.FC<Props> = ({ href, children, target, className, ...delegated }) => {
	const isTargetBlank = target === "_blank";
	const rel = isTargetBlank ? "noopener" : undefined;
	const prefetch = isTargetBlank;

	return (
		<NextLink
			className={clsx(styles.link, className)}
			href={href}
			target={target}
			rel={rel}
			prefetch={prefetch}
			{...delegated}
		>
			{children}
			{isTargetBlank && <ArrowUpRight className={styles.arrowIcon} />}
		</NextLink>
	);
};
