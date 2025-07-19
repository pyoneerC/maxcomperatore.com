import React, { Children, cloneElement, isValidElement, ReactElement } from "react";
import clsx from "clsx";

export type AsChildProps<DefaultElementProps> =
  | ({ asChild?: false } & DefaultElementProps)
  | { asChild: true; children: React.ReactNode };

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot: React.FC<Props> = ({ children, ...props }) => {
  if (isValidElement(children)) {
    // Aseguramos un ReactElement con props extendidas
    const child = children as ReactElement<Record<string, unknown> & {
      style?: React.CSSProperties;
      className?: string;
    }>;

    const childProps = child.props ?? {};
    const childStyle = (childProps.style && typeof childProps.style === "object"
      ? (childProps.style as React.CSSProperties)
      : {}) as React.CSSProperties;

    return cloneElement(child, {
      ...props,
      ...childProps,
      style: {
        ...(props.style ?? {}),
        ...childStyle,
      },
      className: clsx(props.className, childProps.className),
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null); // lanza error si hay >1 hijo
  }

  return null;
};
