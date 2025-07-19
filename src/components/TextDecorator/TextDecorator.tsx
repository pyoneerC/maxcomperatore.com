"use client";

import React from "react";

interface TextDecoratorProps {
	children: React.ReactNode
	color?: string
	isUnderlined?: boolean
	isHighlighted?: boolean
	isBold?: boolean
	font?: string
	style?: React.CSSProperties
}

const TextDecorator: React.FC<TextDecoratorProps> = ({
	children,
	color = "#000000",
	isUnderlined = false,
	isHighlighted = false,
	isBold = false,
	font = "Arial",
	style = {},
}) => {
	const textStyle = {
		color,
		textDecoration: isUnderlined ? "underline" : "none",
		fontWeight: isBold ? "bold" : "normal",
		fontFamily: font,
		backgroundColor: isHighlighted ? "#ffff00" : "transparent",
		...style,
	};

	return (
		<span style={textStyle}>
			{children}
		</span>
	);
};

export default TextDecorator;
