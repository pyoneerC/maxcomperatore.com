"use server";

import { FORMSPREE_URL } from "~/constants";

interface FormDataValues {
	name: string
	email: string
	message: string
}

interface SendEmailResponse {
	error?: string
	success?: boolean
}

const isFormDataValues = (obj: any): obj is FormDataValues => {
	return (
		typeof obj.name === "string" && typeof obj.email === "string" && typeof obj.message === "string"
	);
};

export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
	const formDataObject = Object.fromEntries(formData.entries());

	if (!isFormDataValues(formDataObject)) {
		return { error: "Campos no válidos" };
	}

	const { name, email, message } = formDataObject;

	try {
		const response = await fetch(`${FORMSPREE_URL}/${process.env.FORMSPREE_ID}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, message }),
		});

		if (!response.ok) {
			return { error: "Error al enviar el formulario" };
		}

		return { success: true };
	} catch (error) {
		return { error: "Error de red o del servidor" };
	}
};
