"use client";

import { forwardRef } from "react";

import * as LabelPrimitive from "@radix-ui/react-label";
import clsx from "clsx";

import styles from "./Label.module.css";

export const Label = forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root ref={ref} className={clsx(styles.label, className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;
