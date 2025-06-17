"use client"

import { useIsValidAppRoute } from "~/hooks/use-is-in-valid-path"
import { HOME_NAV_LINKS } from "~/constants"
import { Link } from "~/components/Ui/Link"
import { useTranslations } from "next-intl"
import styles from "./Navigation.module.css"

export const Navigation = () => {
  const isValidAppRoute = useIsValidAppRoute()
  const t = useTranslations("Header")


  if (!isValidAppRoute) return

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {HOME_NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>
              {t(label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}