"use client"

import { useState } from "react"
import clsx from "clsx"
import { DRESAN_EMAIL } from "~/constants"
import { useTimeout } from "~/hooks/use-timeout"
import { CheckIcon } from "~/components/Svg/CheckIcon"
import { EmailIcon } from "~/components/Svg/EmailIcon"
import styles from "./CopyEmailSmallButton.module.css"
import { ArrowUpRight } from "~/components/Svg/ArrowUpRight"

const RESET_FEEDBACK_TIME = 2000

interface Props {
	className?: string
}

export const CopyEmailSmallButton: React.FC<Props> = ({ className }) => {
	const [displayFeedback, setDisplayFeedback] = useState(false)

	const hideFeedback = () => setDisplayFeedback(false)

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME)

	const handleOnClick = async () => {
		const isCopied = true
		setDisplayFeedback(isCopied)
		window.location.href = `mailto:${DRESAN_EMAIL}`
	}

	return (
		<button className={clsx(styles.button, className)} onClick={handleOnClick}>
			<EmailIcon /> {DRESAN_EMAIL}
			<ArrowUpRight className={clsx(styles.icon, { [styles.showIcon]: !displayFeedback })} />
			<CheckIcon className={clsx(styles.icon, { [styles.showIcon]: displayFeedback })} />
		</button>
	)
}
