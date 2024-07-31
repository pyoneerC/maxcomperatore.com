"use client";

import { useRef, useState } from "react";
import { Button } from "~/components/Ui/Button";
import { Label } from "~/components/Ui/Label";
import { Input } from "~/components/Ui/Input";
import { Textarea } from "~/components/Ui/TextArea";
import { MessageCard } from "~/components/MessageCard";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const [responseMessage, setResponseMessage] = useState("");
	const [hasError, setHasError] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// @ts-ignore
		const formData = new FormData(formRef.current);

		fetch("https://formspree.io/f/xzzpebvr", {
			method: 'POST',
			body: formData,
			headers: {
				'Accept': 'application/json'
			},
		})
			.then(response => response.json())
			.then(data => {
				if (data.ok) {
					setResponseMessage("Gracias por tu mensaje ❤️, responderé lo antes posible.");
					setHasError(false);
					formRef.current?.reset();
				} else {
					setResponseMessage(data.error || "Oops! Algo salió mal.");
					setHasError(true);
				}
			})
			.catch(error => {
				setResponseMessage("Oops! Algo salió mal.");
				setHasError(true);
			});
	};

	const correctEmail = (event: { target: { value: any } }) => {
		let email = event.target.value;
		email = email.trim();

		const VALID_EMAIL_API_KEY = 'xbHNBLZBMpUF1DkVkCp6Td4euRjeJLB6';

		const fetchValidEmail = fetch('https://validemail.io/v1/validate?api_key=' + VALID_EMAIL_API_KEY + '&email=gontoregames@gmail.com');

		const domainCorrections = {
			'gamil.com': 'gmail.com',
			'hotamil.com': 'hotmail.com',
			'yhaoo.com': 'yahoo.com',
			'outlok.com': 'outlook.com',
			'gmai.com': 'gmail.com',
			'mail.com': 'gmail.com',
			'hot.com': 'hotmail.com',
			'gmali.com': 'gmail.com',
			'gmial.com': 'gmail.com',
			'tlok.com': 'outlook.com',
			'gmal.com': 'gmail.com',
			'yaho.com': 'yahoo.com',
			'iahoo.com': 'yahoo.com',
			'hotmai.com': 'hotmail.com',
			'hotmaiil.com': 'hotmail.com',
			'hotmal.com': 'hotmail.com',
			'hotmial.com': 'hotmail.com',
			'hotmil.com': 'hotmail.com',
			'gmaail.com': 'gmail.com',
		};

		const domainRegex = /@(gamil|hotamil|yhaoo|outlok|gmai|mail|hot|gmali|gmial|tlok|gmal|yaho|iahoo|hotmai|hotmaiil|hotmal|hotmail|hotmil|gmaail)\.com$/i;

		if (domainRegex.test(email)) {
			const domainMatch = email.match(domainRegex);
			if (domainMatch && domainMatch[1]) {
				const lookupKey = domainMatch[1].toLowerCase() + '.com';
				// @ts-ignore
				const correctDomain = domainCorrections[lookupKey];
				if (correctDomain) {
					email = email.replace(domainRegex, '@' + correctDomain);
				}
			}
		}

		event.target.value = email;
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit} className={styles.form} method="POST">
			<Label>
				<span className={styles.labelWrapper}>Nombre</span>
				<Input placeholder="Alfredo Linux" name="name" autoComplete="name" required />
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Correo</span>
				<Input
					placeholder="alfredlinux@gmail.com"
					type="email"
					name="email"
					autoComplete="email"
					onBlur={correctEmail}
					required
				/>
			</Label>
			<Label>
				<span className={styles.labelWrapper}>Mensaje</span>
				<Textarea placeholder="Hola Max, [Insertar Mensaje]" name="message" required />
			</Label>
			<Button type="submit" size="medium">
				Enviar
			</Button>
			{responseMessage && (
				<MessageCard variant={hasError ? "error" : "success"}>{responseMessage}</MessageCard>
			)}
		</form>
	);
};

export default ContactForm;
