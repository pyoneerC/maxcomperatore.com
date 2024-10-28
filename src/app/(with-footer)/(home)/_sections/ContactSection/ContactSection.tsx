import clsx from "clsx"
import styles from "./ContactSection.module.css"
import { useTranslations } from "next-intl"
import { Button } from "~/components/Ui/Button"
import { ContactDialog } from "~/components/ContactDialog"

export const ContactSection = () => {
	const t = useTranslations("ContactSection")

	return (
		<section className={clsx("section-wrapper", styles.section)}>
			<h1 className={styles.title}>
				{t("question")}
			</h1>
			<div className={styles.contactDialogContainer}>
			<ContactDialog
				trigger={
					<Button className={styles.actionBtn} type="button">
						{t("contact")}
					</Button>
				}
			/>
			</div>
		</section>
	)
}
