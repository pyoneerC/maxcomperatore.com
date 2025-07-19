"use client";

import { useState } from "react";

import clsx from "clsx";

import { ArrowUpRight } from "~/components/Svg/ArrowUpRight";
import { CheckIcon } from "~/components/Svg/CheckIcon";
import { EmailIcon } from "~/components/Svg/EmailIcon";
import { JOACO_EMAIL } from "~/constants";
import { useTimeout } from "~/hooks/use-timeout";

import styles from "./CopyEmailSmallButton.module.css";


const RESET_FEEDBACK_TIME = 2000;

interface Props {
	className?: string
}

export const CopyEmailSmallButton: React.FC<Props> = ({ className }) => {
	const [displayFeedback, setDisplayFeedback] = useState(false);

	const hideFeedback = () => setDisplayFeedback(false);

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME);

	const handleOnClick = async () => {
		const isCopied = true;
		setDisplayFeedback(isCopied);
		window.location.href = `mailto:${JOACO_EMAIL}`;
	};

	return (
		<button className={clsx(styles.button, className)} onClick={handleOnClick}>
			<EmailIcon /> {JOACO_EMAIL}
			<ArrowUpRight className={clsx(styles.icon, { [styles.showIcon]: !displayFeedback })} />
			<CheckIcon className={clsx(styles.icon, { [styles.showIcon]: displayFeedback })} />
		</button>
	);
};
