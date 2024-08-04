import clsx from "clsx";
import styles from "./MessageCard.module.css";

interface Props {
	children: React.ReactNode
	variant?: "success" | "error"
}

export const MessageCard: React.FC<Props> = ({ children, variant = "success" }) => {
	return <p className={clsx(styles.messageCard, styles[variant])}>{children}</p>;
};
