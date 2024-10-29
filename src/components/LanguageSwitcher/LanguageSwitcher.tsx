"use client"

import { useTransition } from "react"
import styles from "./LanguageSwitcher.module.css"
import { setUserLocale } from "~/services/locale"
import { useLocale, useTranslations } from "next-intl"

export const LanguageSwitcher = () => {
	const locale = useLocale()
	const [isPending, startTransition] = useTransition()
	// const [isSpanish, setIsSpanish] = useState(locale === "es");
	const t = useTranslations("LanguageSwitcher")

	const handleOnClick = () => {
		// localStorage.setItem("language", isSpanish ? "en" : "es");
		startTransition(() => {
			setUserLocale(locale === "es" ? "en" : "es").then(r => r);
			// setIsSpanish(!isSpanish);
		})
	}

	return (
		<button
			className={styles.button}
			onClick={handleOnClick}
			title={t("switchLanguage")}
			aria-live="polite"
			disabled={isPending}
		>
			<img
				className={styles.flag}
				aria-hidden="true"
				src={locale == "es" ? "/assets/flags/spain.avif" : "/assets/flags/uk.avif"}
				alt={`Switch to ${locale == "en" ? "English" : "Spanish"}`}
				height={24}
				width={24}
			/>
		</button>
	)
}

export default LanguageSwitcher