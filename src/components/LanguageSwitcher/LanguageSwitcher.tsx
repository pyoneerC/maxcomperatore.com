"use client"

import { useEffect, useState, useTransition } from "react"
import styles from "./LanguageSwitcher.module.css"
import { setUserLocale } from "~/services/locale"
import { useTranslations } from "next-intl"

export const LanguageSwitcher = () => {
	const [isPending, startTransition] = useTransition()
	const [locale, setLocale] = useState(null) // Start with null to detect loading
	const t = useTranslations("LanguageSwitcher")

	useEffect(() => {
		const fetchCountryAndSetLocale = async () => {
			try {
				const response = await fetch("https://ipapi.co/json/")
				const data = await response.json()
				const country = data.country
				const spanishSpeakingCountries = [
					"AR", // Argentina
					"BO", // Bolivia
					"CL", // Chile
					"CO", // Colombia
					"CR", // Costa Rica
					"CU", // Cuba
					"DO", // Dominican Republic
					"EC", // Ecuador
					"SV", // El Salvador
					"GQ", // Equatorial Guinea (Spanish is an official language)
					"GT", // Guatemala
					"HN", // Honduras
					"MX", // Mexico
					"NI", // Nicaragua
					"PA", // Panama
					"PY", // Paraguay
					"PE", // Peru
					"PR", // Puerto Rico
					"ES", // Spain
					"UY", // Uruguay
					"VE"  // Venezuela
				]
				const defaultLocale = spanishSpeakingCountries.includes(country) ? "es" : "en"
				// @ts-ignore
				setLocale(defaultLocale)
				await setUserLocale(defaultLocale)
			} catch (error) {
				console.error("Error fetching location:", error)
				// @ts-ignore
				setLocale("en") // Default to English on error
			}
		}

		fetchCountryAndSetLocale()
	}, [])

	const handleOnClick = () => {
		startTransition(() => {
			const newLocale = locale === "es" ? "en" : "es"
			// @ts-ignore
			setUserLocale(newLocale).then(() => setLocale(newLocale))
		})
	}

	// Render loading state until locale is set
	if (!locale) {
		return <div>Loading language preferences...</div>
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
