"use client";

import { useRef, useState } from "react";
import { Button } from "~/components/Ui/Button";
import { Label } from "~/components/Ui/Label";
import { Input } from "~/components/Ui/Input";
import { Textarea } from "~/components/Ui/TextArea";
import { MessageCard } from "~/components/MessageCard";
import styles from "./ContactForm.module.css";
import { useTranslations } from "next-intl";

const ContactForm = () => {
	const formRef = useRef(null);
	const [responseMessage, setResponseMessage] = useState("");
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");
	const [hasError, setHasError] = useState(false);
	const [nameValid, setNameValid] = useState(false);
	const [emailValid, setEmailValid] = useState(false);
	const [messageValid, setMessageValid] = useState(false);

	const t = useTranslations("Form");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Reset global response message
		setResponseMessage("");

		// @ts-ignore
		const formData = new FormData(formRef.current);

		try {
			const response = await fetch("https://formspree.io/f/xzzpebvr", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			const data = await response.json();
			if (data.ok) {
				setResponseMessage(t("success"));
				setHasError(false);

				setNameValid(false);
				setEmailValid(false);
				setMessageValid(false);
				setNameError("");
				setEmailError("");
				setMessageError("");

				// @ts-ignore
				formRef.current?.reset();
			} else {
				setResponseMessage(data.error || t("somethingWrong"));
				setHasError(true);
			}
		} catch (error) {
			setResponseMessage(t("networkError"));
			setHasError(true);
		}
	};

	const validateName = (name: string) => {
		if (name.length < 5) {
			setNameError(t("nameError"));
			setNameValid(false);
			setHasError(true);
		} else {
			setNameError("");
			setNameValid(true);
			setHasError(false);
		}
	};

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setResponseMessage("");
		const name = event.target.value;
		validateName(name);
	};

	const validateEmail = (email: string) => {
		const emailRegex =
			/^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9][a-zA-Z0-9.-]{0,253}[a-zA-Z0-9]\.[a-zA-Z]{2,24}$/;
		if (!emailRegex.test(email)) {
			setEmailError(t("emailError"));
			setEmailValid(false);
			setHasError(true);
		} else {
			setEmailError("");
			setEmailValid(true);
			setHasError(false);
		}
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setResponseMessage("");
		const email = event.target.value;
		validateEmail(email);
	};

	const validateMessage = (message: string) => {
		if (message.length < 10) {
			setMessageError(t("messageError"));
			setMessageValid(false);
			setHasError(true);
		} else {
			setMessageError("");
			setMessageValid(true);
			setHasError(false);
		}
	};

	const handleMessageChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setResponseMessage("");
		const message = event.target.value;
		validateMessage(message);
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className={styles.form}
			method="POST"
		>
			<Label>
				<span className={styles.labelWrapper}>{t("nameLabel")}</span>
				<div className={styles.inputWithIcon}>
					<Input
						className={styles.inputField}
						placeholder={t("name")}
						name="name"
						autoComplete="name"
						required
						onChange={handleNameChange}
					/>
					{nameValid && (
						<svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
							<path d="M9 12l2 2l4 -4" />
						</svg>
					)}
				</div>
				{nameError && (
					<p className={styles.error}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M8.274 3h7.452L21 8.274v7.452L15.726 21H8.274L3 15.726V8.274zM12 7.65v5.2m0 3.39v.01"></path>
						</svg>
						{nameError}
					</p>
				)}
			</Label>
			<Label>
				<span className={styles.labelWrapper}>{t("emailLabel")}</span>
				<div className={styles.inputWithIcon}>
					<Input
						placeholder={t("email")}
						type="email"
						name="email"
						autoComplete="email"
						required
						onInput={handleEmailChange} />
					{emailValid && (
						<svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
							<path d="M9 12l2 2l4 -4" />
						</svg>
					)}
				</div>
					{emailError && (
						<p className={styles.error}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none"
									 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M8.274 3h7.452L21 8.274v7.452L15.726 21H8.274L3 15.726V8.274zM12 7.65v5.2m0 3.39v.01"></path>
							</svg>
							{emailError}
						</p>
					)}
			</Label>
			<Label>
				<span className={styles.labelWrapper}>{t("messageLabel")}</span>
				<div className={styles.inputWithIcon}>
					<Textarea
						placeholder={t("message")}
						name="message"
						required
						onChange={handleMessageChange}
						className={messageValid ? styles.valid : ""}
					/>
					{messageValid && (
						<svg
							className={styles.checkIcon}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
							<path d="M9 12l2 2l4 -4" />
						</svg>
					)}
				</div>
				{messageError && (
					<p className={styles.error}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M8.274 3h7.452L21 8.274v7.452L15.726 21H8.274L3 15.726V8.274zM12 7.65v5.2m0 3.39v.01"></path>
						</svg>
						{messageError}
					</p>
				)}
			</Label>
			<Button type="submit" size="medium" disabled={hasError}>
				{t("submit")}
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>
					{responseMessage}
				</MessageCard>
			)}
		</form>
	);
};

export default ContactForm;