import Link from "next/link";
import { useTranslations } from "next-intl";

import { Footer404 } from "~/components/Footer404";
import { Button } from "~/components/Ui/Button";

import styles from "./not-found.module.css";


export const metadata = {
	title: "Maximo Comperatore - 404",
};

export default function NotFound() {
	const t = useTranslations("404");
	return (
		<>
			<main className={styles.wrapper}>
				<h1 className={styles.title}>404</h1>
				<p className={styles.description}>{t("title")}</p>
				<Button asChild>
					<Link href="/">{t("home")}
					</Link>
				</Button>
			</main>
			<Footer404 />
		</>
	);
}
