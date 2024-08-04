import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "~/components/Ui/Dialog";
import ContactForm from "../ContactForm/ContactForm";


interface Props {
	trigger: React.ReactNode
}

export const ContactDialog: React.FC<Props> = ({ trigger }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogTitle>Contactar</DialogTitle>
				<ContactForm />
			</DialogContent>
		</Dialog>
	);
};
