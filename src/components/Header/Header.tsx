import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { ContactDialog } from "~/components/ContactDialog";
import { LanguageSwitcher } from "~/components/LanguageSwitcher";
import { MenuMobile } from "~/components/MenuMobile";
import { HomeLogo } from "~/components/Svg/HomeLogo";
import { Button } from "~/components/Ui/Button";

import { ThemeSwitcher } from "../ThemeSwitcher";
import styles from "./Header.module.css";
import { Navigation } from "./Navigation";

export const Header = () => {
	const t = useTranslations("Header");
	return (
		<header className={styles.header}>
			<div className={styles.contentWrapper}>
				<NextLink href="/" aria-label="Ir a la página de inicio">
					<HomeLogo className={styles.homeLogo} />
				</NextLink>
				<Navigation/>
				<div className={styles.optionsWrapper}>
					< ThemeSwitcher />
					< LanguageSwitcher />
					<ContactDialog
						trigger={
							<Button size="small" type="button">
								{t("contact")}
							</Button>
						}
					/>
				</div>
				<MenuMobile />
			</div>
		</header>
	);
};
