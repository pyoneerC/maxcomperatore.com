"use client";

import { useState } from "react";

import { track } from "@vercel/analytics";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import { ContactDialog } from "~/components/ContactDialog";
import { LanguageSwitcher } from "~/components/LanguageSwitcher";
import { Button } from "~/components/Ui/Button";
import { Link } from "~/components/Ui/Link";
import { HOME_NAV_LINKS } from "~/constants";
import { useIsValidAppRoute } from "~/hooks/use-is-in-valid-path";	
import { useOnPathnameChange } from "~/hooks/use-on-pathname-change";
import { toggleBodyOverflow } from "~/utils";

import { ThemeSwitcher } from "../ThemeSwitcher";
import styles from "./MenuMobile.module.css";



export const MenuMobile = () => {
	const [open, setOpen] = useState(false);
	const isValidAppRoute = useIsValidAppRoute();

	const handleCloseMenu = () => {
		setOpen(false);
		toggleBodyOverflow(false);
	};

	useOnPathnameChange(() => {
		setOpen(false);
		toggleBodyOverflow(false);
	});

	const handleOnClick = () => {
		const newOpenState = !open;
		setOpen(newOpenState);
		toggleBodyOverflow(newOpenState);

		document.documentElement.setAttribute("data-feature-flag-menu", newOpenState ? "open" : "closed");
		track("Menu Toggle", {}, { flags: [newOpenState ? "menu-open" : "menu-closed"] });
	};

	const t = useTranslations("Header");

	return (
		<>
			<button
				className={clsx(styles.button, { [styles.open]: open })}
				aria-label={`${open ? "Cerrar" : "Abrir"} menú`}
				type="button"
				onClick={handleOnClick}
			>
				<span className={styles.buttonLine}></span>
				<span className={styles.buttonLine}></span>
			</button>
			<div className={clsx(styles.menu, { [styles.open]: open })}>
				{isValidAppRoute && (
					<nav className={styles.nav}>
						<ul className={styles.navList}>
							{HOME_NAV_LINKS.map(({ href, label }) => (
								<li key={href}>
									<Link
										className={styles.navLink}
										href={href}
										onClick={handleCloseMenu}
									>
										{t(label)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}
				<div className={styles.optionsWrapper}>
					<ContactDialog
						trigger={
							<Button className={styles.contactButton} size="medium" type="button">
								{t("contact")}
							</Button>
						}
					/>
					<div className={styles.block}/>
					<div className={styles.themeWrapper2}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-braces" style={{ verticalAlign: "text-bottom" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
						</svg>
						<span className={styles.themeText}>{t("language")} </span>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-protocol" style={{ verticalAlign: "text-bottom" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M5 14v.015" />
							<path d="M5 10.015v.015" />
						</svg>
						<LanguageSwitcher />
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-braces" style={{ verticalAlign: "text-bottom", transform: "translateY(2px)" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
						</svg>
					</div>
					<div className={styles.themeWrapper}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-braces" style={{ verticalAlign: "text-bottom" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
						</svg>
						<span className={styles.themeText2}>{t("theme")} </span>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-protocol" style={{ verticalAlign: "text-bottom" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M5 14v.015" />
							<path d="M5 10.015v.015" />
						</svg>
						<ThemeSwitcher />
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
								 className="icon icon-tabler icons-tabler-outline icon-tabler-braces" style={{ verticalAlign: "text-bottom", transform: "translateY(1px)" }}>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
						</svg>
					</div>
				</div>
			</div>
		</>
	);
};
