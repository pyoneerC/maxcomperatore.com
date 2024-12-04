"use client";

import React, { useState } from "react";
import styles from "./ChatBot.module.css";
import { useTranslations } from "next-intl";
// @ts-ignore
import confetti from "canvas-confetti";

const Chatbot = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [lastMessageTime, setLastMessageTime] = useState(0); // Track the timestamp of the last message
	const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false); // Track if confetti has been triggered

	const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setInput(e.target.value);
	};

	const triggerConfetti = () => {
		// Only trigger confetti once
		if (!hasTriggeredConfetti) {
			setHasTriggeredConfetti(true);
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 },
			});
		}
	};

	const sendMessage = async () => {
		const currentTime = Date.now();
		const timeSinceLastMessage = currentTime - lastMessageTime;

		// Define the minimum time (in milliseconds) between messages
		const minInterval = 2000; // 3 seconds

		if (timeSinceLastMessage < minInterval) {
			const spamWarning = {
				role: "assistant",
				content: "Por favor, espera un momento antes de enviar otro mensaje.",
			};
			// @ts-ignore
			setMessages((prevMessages) => [...prevMessages, spamWarning]);
			return;
		}

		if (input.trim() === "") return;

		triggerConfetti(); // Trigger confetti on the first click

		setLoading(true);
		setLastMessageTime(currentTime); // Update the last message timestamp

		const userMessage = { role: "user", content: input };
		const newMessages = [...messages, userMessage];
		// @ts-ignore
		setMessages(newMessages);

		try {
			const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
				method: "POST",
				headers: {
					Authorization: `Bearer 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`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					model: "llama-3.1-8b-instant",
					messages: [
						{
							"role": "system",
							"content": "Sé inteligente, versátil y empático. Responde con un tono amigable, adaptándote al contexto emocional del usuario. Si detectas tensión o estrés en su mensaje, responde con calidez y ofrece soluciones concretas. Si detectas entusiasmo, responde con energía positiva. Responde en español si el usuario habla en español y en inglés si lo hace en inglés. Siempre escribe sin errores de ortografía ni gramática. Mantén las respuestas claras, concisas y enfocadas en proveer información relevante.\n\n**Reglas principales:**\n\n1. **Páginas web:** Si un usuario te pide desarrollar una página web para su emprendimiento, responde: \"Perfecto, por favor haga clic en el botón de arriba que dice Contactar y llene el formulario para que podamos discutir los detalles.\"\n2. **Proyectos:** Menciona únicamente: ArgentoFX, Ephemera, Mercadix, Blackout Boulevard y Array Utils. No agregues información adicional ni enumeraciones innecesarias.\n3. **Datos de contacto:** Si te piden redes sociales o datos de contacto, responde: \"Puedes ver mis redes sociales en el pie de página de este sitio.\"\n4. **Consultas sobre cómo puedes ayudar:** Si te preguntan \"¿Cómo puedes ayudarme?\", responde: \"Puedo asistirte en el desarrollo de juegos y backend utilizando Python, C++, C#, y más. Si estás interesado, podemos discutir los detalles para adaptar mi experiencia a tus necesidades.\"\n5. **Servicios de desarrollo:** Si te dicen \"necesito un desarrollador backend/de videojuegos,\" responde: \"¡Claro! Puedes contactarme a través del botón Contactar en la parte superior para que podamos discutir cómo puedo ayudarte.\"\n6. **Falta de información:** Si no tienes la información necesaria para responder una pregunta, responde: \"No tengo la información necesaria para responder a esa pregunta.\"\n\n**Filtro de lenguaje inapropiado:**\n- Si detectas palabras inapropiadas o insultos, responde: \"He detectado una palabra inapropiada en tu mensaje, evita usar ese tipo de lenguaje para que pueda ayudarte mejor.\"\n  - Ejemplo:\n    - Usuario: \"Este es un maldito problema.\"\n    - Respuesta: \"He detectado una palabra inapropiada en tu mensaje. Por favor, evita usar ese tipo de lenguaje para que pueda ayudarte mejor.\"\n\n**Información personal:**\n- **Edad:** 19 años.\n- **Ubicación:** Mendoza, Argentina.\n- **Idiomas:** Español (Nativo) | Inglés (C1).\n- **Tecnologías:** Python, C#, C++, Git, Unreal Engine, Unity, Github Actions, Redis, Docker, PostgreSQL.\n- **Competencias blandas:** Autonomía, Colaboración, Gestión de tiempo, Atención al detalle, Adaptabilidad y Organización.\n- **Educación:** Tecnicatura en Programación de Videojuegos, Universidad de Mendoza (03/2023 – Presente). Colaborador en: \"Club de los Videojuegos.\"\n- **Experiencia Profesional:**\n  - **Desarrollador de Videojuegos en Intellicialis (08/2023 – 11/2023, remoto):**\n    - Desarrollé interfaces de usuario utilizando Unreal Engine.\n    - Optimicé scripts para el juego \"Active and Operational.\"\n    - Mejoré la eficiencia y aceleré el ciclo de desarrollo del equipo.\n\n**Sociales:**\n- **LinkedIn:** Max Comperatore.\n- **Itch.io:** pyoneerc1.\n- **GitHub:** pyoneerC.\n\n**Detección de emociones y empatía:**\n- Si detectas tensión, responde con calma y ofrece soluciones claras.\n  - Ejemplo: \"Entiendo que esta situación puede ser estresante. Estoy aquí para ayudarte. ¿Qué necesitas resolver primero?\"\n- Si detectas entusiasmo, responde con energía positiva.\n  - Ejemplo: \"¡Eso suena emocionante! Estoy seguro de que podemos trabajar juntos para lograrlo.\"\n- Si detectas tristeza o preocupación, responde con empatía y comprensión.\n  - Ejemplo: \"Siento que esto te está preocupando. ¿Cómo puedo ayudarte a solucionarlo?\"\n\n**Ejemplo de conversación:**\n- Usuario: \"Me gustaría que me desarrolles una página web para mi emprendimiento.\"\n  - Respuesta: \"Perfecto, por favor haga clic en el botón de arriba que dice Contactar y llene el formulario para que podamos discutir los detalles.\"\n- Usuario: \"¿Qué proyectos has hecho?\"\n  - Respuesta: \"ArgentoFX, Ephemera, Mercadix, Blackout Boulevard y Array Utils.\"\n- Usuario: \"Necesito un desarrollador backend.\"\n  - Respuesta: \"¡Claro! Puedes contactarme a través del botón Contactar en la parte superior para que podamos discutir cómo puedo ayudarte.\"\n- Usuario: \"¿Cómo puedes ayudarme?\"\n  - Respuesta: \"Puedo asistirte en el desarrollo de juegos y backend utilizando Python, C++, C#, y más. Si estás interesado, podemos discutir los detalles para adaptar mi experiencia a tus necesidades.\"\n\n**Directrices adicionales:**\n- Mantén un lenguaje inclusivo y profesional.\n- Responde en el mismo idioma en el que te hablen, español o inglés.\n- Evita cualquier tema +18 o información irrelevante.\n- Provee siempre respuestas claras, precisas y útiles. Actualmente trabajo en Transparencia Latam donde me encargo de todo el desarollo de software de la empresa, que es una boutique de compliance (abogados) y desarrollo de software.\"\n\n**¿Cómo puedo ayudarte?**",
						},
						...newMessages,
					],
					max_tokens: 40,
					stop: ["\n", "."],
					temperature: 0.75,
					top_p: 1,
					frequency_penalty: 0,
				}),
			});

			const data = await response.json();
			const botMessage = {
				role: "assistant",
				content: data.choices[0].message.content,
			};

			// @ts-ignore
			setMessages((prevMessages) => [...prevMessages, botMessage]);
		} catch (error) {
			console.error("Error fetching AI response:", error);
			const errorMessage = {
				role: "assistant",
				content: "Lo siento, algo salió mal. Intenta nuevamente más tarde.",
			};
			// @ts-ignore
			setMessages((prevMessages) => [...prevMessages, errorMessage]);
		}

		setInput("");
		setLoading(false);
	};

	const handleKeyPress = (e: { key: string }) => {
		if (e.key === "Enter") {
			sendMessage().then((r) => r);
		}
	};

	const getLastMessages = (messages: any) => {
		return messages.slice(Math.max(messages.length - 3, 0));
	};

	const t = useTranslations("AI");

	return (
		<div>
			<div className={styles.chatContainer}>
				{getLastMessages(messages).map(
					(
						message: {
							role: string | number;
							content:
								| string
								| number
								| bigint
								| boolean
								| React.ReactElement<any, string | React.JSXElementConstructor<any>>
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| Promise<React.AwaitedReactNode>
								| null
								| undefined;
						},
						index: React.Key | null | undefined
					) => (
						<div key={index} className={`${styles.message} ${styles[message.role]}`}>
							{message.content}
						</div>
					)
				)}
				{loading && <div className={`${styles.message} ${styles.assistant}`}>{t("typing")}</div>}
			</div>
			<input
				type="text"
				required={true}
				value={input}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder={t("placeholder")}
				className={styles["chat-input"]}
			/>
			<button
				onClick={sendMessage}
				disabled={loading || input.trim() === ""}
				className={`${styles.button} ${input.trim() === "" ? styles.prohibited : ""}`}
				style={{ transform: "translateY(5px)" }}
			>
				<svg
					style={{ verticalAlign: "text-bottom" }}
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="icon icon-tabler icons-tabler-outline icon-tabler-send-2"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
					<path d="M6.5 12h14.5" />
				</svg>
			</button>
		</div>
	);
};

export default Chatbot;
