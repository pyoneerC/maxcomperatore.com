import { forwardRef } from "react";

import clsx from "clsx";

import styles from "./TextArea.module.css";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, ...props }, ref) => {
		return <textarea className={clsx(styles.textarea, className)} ref={ref} {...props} />;
	}
);
Textarea.displayName = "Textarea";
