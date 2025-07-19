"use client";

import { useState } from "react";

import clsx from "clsx";
import { useTranslations} from "next-intl";

import { JOACO_EMAIL } from "~/constants";
import { useTimeout } from "~/hooks/use-timeout";
import { copyToClipboard } from "~/utils";

import styles from "./CopyEmailButton.module.css";

const RESET_FEEDBACK_TIME = 5000;

export const CopyEmailButton = () => {
	const [displayFeedback, setDisplayFeedback] = useState(false);
	const t = useTranslations("CopyEmailButton");

	const hideFeedback = () => setDisplayFeedback(false);

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME);

	const handleOnClick = async () => {
		const isCopied = await copyToClipboard(JOACO_EMAIL);
		setDisplayFeedback(isCopied);
	};

	return (
		<div className={styles.wrapper}>
			<div className={clsx(styles.toast, { [styles.enterToast]: displayFeedback })}>
				{t("toast")}
			</div>
			<button className={styles.button} type="button" onClick={handleOnClick}>
				{JOACO_EMAIL}
			</button>
			<div className={styles.hintMessage}>{t("copy")}</div>
		</div>
	);
};
