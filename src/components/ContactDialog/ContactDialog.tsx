import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/Ui/Dialog"
import ContactForm from "../ContactForm/ContactForm"
import {useTranslations} from "next-intl"


interface Props {
	trigger: React.ReactNode
}

export const ContactDialog: React.FC<Props> = ({ trigger }) => {
	const t = useTranslations("ContactDialog")

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogTitle>{t("title")}</DialogTitle>
				<ContactForm />
			</DialogContent>
		</Dialog>
	)
}
