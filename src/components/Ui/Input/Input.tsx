import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return <input type={type} className={clsx(styles.input, className)} ref={ref} {...props} />;
	}
);
Input.displayName = "Input";
