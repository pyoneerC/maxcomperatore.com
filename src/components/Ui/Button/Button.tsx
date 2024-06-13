import { clsx } from "clsx"
import { Slot } from "~/components/Slot"
import styles from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
	size?: "large" | "medium" | "small"
	variant?: "primary" | "outlined"
	rounded?: "default" | "full"
}

export const Button: React.FC<Props> = ({
	className,
	size = "large",
	variant = "primary",
	rounded = "default",
	asChild,
	...delegated
}) => {
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			className={clsx(styles.button, styles[variant], styles[size], styles[rounded], className)}
			{...delegated}
		/>
	)
}
