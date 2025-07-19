import { Children, cloneElement, isValidElement } from "react";

import clsx from "clsx";

export type AsChildProps<DefaultElementProps> =
	| ({ asChild?: false } & DefaultElementProps)
	| { asChild: true; children: React.ReactNode }

interface Props extends React.HTMLAttributes<HTMLElement> {
	children?: React.ReactNode
}

export const Slot: React.FC<Props> = ({ children, ...props }) => {
	if (isValidElement(children)) {
		return cloneElement(children, {
			...props,
			...children.props,
			style: {
				...props.style,
				...children.props.style,
			},
			className: clsx(props.className, children.props.className),
		});
	}

	if (Children.count(children) > 1) {
		Children.only(null);
	}

	return null;
};
