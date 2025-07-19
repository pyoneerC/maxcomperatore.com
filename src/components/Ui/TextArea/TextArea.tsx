import { forwardRef } from "react";

import clsx from "clsx";

import styles from "./TextArea.module.css";
/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface TextTareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextTareaProps>(
	({ className, ...props }, ref) => {
		return <textarea className={clsx(styles.textarea, className)} ref={ref} {...props} />;
	}
);
Textarea.displayName = "Textarea";
