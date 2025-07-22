"use client";

import { useRef, useState } from "react";

import { useTranslations } from "next-intl";

import { MessageCard } from "~/components/MessageCard";
import { Button } from "~/components/Ui/Button";
import { Input } from "~/components/Ui/Input";
import { Label } from "~/components/Ui/Label";
import { Textarea } from "~/components/Ui/TextArea";
import { FORMSPREE_URL } from "~/constants";

import styles from "./ContactForm.module.css";

export const EMAIL_REGEX = /^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)(?=[a-zA-Z0-9._%+-]{1,64}@)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9][a-zA-Z0-9.-]{0,253}[a-zA-Z0-9]\.[a-zA-Z]{2,24}$/;
export const FORMSPREE_ENDPOINT =
	process.env.NEXT_PUBLIC_FORMSPREE_ID
		? `${FORMSPREE_URL}/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
		: (() => { throw new Error("Missing NEXT_PUBLIC_FORMSPREE_ID"); })();

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [responseMessage, setResponseMessage] = useState("");
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");
	const t = useTranslations("Form");

	const hasError = Boolean(nameError || emailError || messageError);


	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResponseMessage("");

		const form = event.currentTarget;

		const data = new FormData(form);
		try {
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				body: data,
				headers: {
					Accept: "application/json",
				},
			});

			if (!res.ok) {
				setResponseMessage(t("somethingWrong"));
				return;
			}

			const json = await res.json();
			if (json.ok) {
				setResponseMessage(t("success"));
				form.reset();
				setNameError(""); setEmailError(""); setMessageError("");
			} else {
				setResponseMessage(json.error || t("somethingWrong"));
			}
		} catch (err) {
			console.error("Error en handleSubmit:", err);

			setResponseMessage(t("networkError"));
		}
	};

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const v = e.target.value;
		setNameError(v.length < 4 ? t("nameError") : "");
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const v = e.target.value;
		setEmailError(!EMAIL_REGEX.test(v) ? t("emailError") : "");
	};

	const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const v = e.target.value;
		setMessageError(v.length < 10 ? t("messageError") : "");
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmit}
			className={styles.form}
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
					{!nameError && (
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
						onChange={handleEmailChange} />
					{!emailError && (
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
						className={messageError ? styles.valid : ""}
					/>
					{!messageError && (
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