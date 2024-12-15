"use client"

import { useEffect, useState, useTransition } from "react"
import styles from "./LanguageSwitcher.module.css"
import { setUserLocale } from "~/services/locale"
import { useTranslations } from "next-intl"

export const LanguageSwitcher = () => {
	const [isPending, startTransition] = useTransition()
	const [locale, setLocale] = useState("en")
	const t = useTranslations("LanguageSwitcher")

	// Automatically set locale to English if query parameters exist
	useEffect(() => {
		if (typeof window !== "undefined") {
			const params = new URLSearchParams(window.location.search)
			if (params.toString()) {
				setLocale("en")
				// Optionally, sync with backend
				setUserLocale("en")
			}
			else {
				setLocale("es")
				// Optionally, sync with backend
				setUserLocale("es")
			}
		}
	}, [])

	const handleOnClick = () => {
		startTransition(() => {
			const newLocale = locale === "es" ? "en" : "es"
			// @ts-ignore
			setUserLocale(newLocale).then(() => setLocale(newLocale))
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
				src={locale === "es" ? "/assets/flags/spain.avif" : "/assets/flags/uk.avif"}
				alt={`Switch to ${locale === "en" ? "English" : "Spanish"}`}
				height={24}
				width={24}
			/>
		</button>
	)
}

export default LanguageSwitcher
