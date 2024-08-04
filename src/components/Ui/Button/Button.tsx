import { forwardRef } from "react";
import { clsx } from "clsx";
import { Slot } from "~/components/Slot";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
	size?: "large" | "medium" | "small"
	variant?: "primary" | "outlined"
	rounded?: "default" | "full"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		className,
		size = "large",
		variant = "primary",
		rounded = "default",
		asChild,
		...delegated
	} = props;
	const Component = asChild ? Slot : "button";

	return (
		<Component
			ref={ref}
			className={clsx(styles.button, styles[variant], styles[size], styles[rounded], className)}
			{...delegated}
		/>
	);
});
