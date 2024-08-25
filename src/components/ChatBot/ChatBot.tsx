"use client"

import React, { useState } from 'react';
import styles from './ChatBot.module.css';
import {useTranslations} from "next-intl"

const Chatbot = () => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
		setInput(e.target.value);
	};

	const sendMessage = async () => {
		if (input.trim() === '') return;

		setLoading(true);

		const userMessage = { role: 'user', content: input };
		const newMessages = [...messages, userMessage];
		// @ts-ignore
		setMessages(newMessages);

		try {
			const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer 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`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					model: 'llama3-8b-8192',
					messages: [
						{ role: 'system', content: 'Se inteligente y versatil. Responde con tono amigable y sin errores de ortografia. Responde en espanol si el usario habla en espanol y en ingles si este habla en ingles. Si un usuario te pide desarrollar una página web para su emprendimiento, responde: "Perfecto, por favor haga clic el boton de arriba que dice contactar llene el formulario para que podamos discutir los detalles." Si te preguntan de proyectos responde: ArgentoFX, Ephemera, Mercadix, Blackout Boulevard y Array Utils, nada más. Nunca digas "entre mis proyectos más destacados se encuentran" o "he trabajado en varios proyectos, algunos de los más destacados son," solo di los proyectos. Responde en el mismo idioma en que te hablan, en inglés o en español. Sé siempre cortés y formal con los saludos y recuerda que estás aquí para proveer información relevante sobre Max Comperatore. Evita temas +18. No des detalles innecesarios ni respuestas largas; responde brevemente. Cuando te pidan datos de contacto o redes sociales, di: "Puedes ver mis redes sociales en el pie de página de este sitio." No uses URLs directas ni menciones URLs incorrectas. No uses aclaraciones como "según la información disponible" o "según su perfil". Responde con certeza y brevedad. Si no tienes la información necesaria, responde: "No tengo la información necesaria para responder a esa pregunta." Ejemplo de conversación: "Me gustaría que me desarrolles una página web para mi emprendimiento." -> "Perfecto, por favor ingrese su email y nos pondremos en contacto para discutir los detalles." Recuerda siempre mantener la conversación clara, concisa y orientada a proveer información útil. Edad: 19 anos. Lugar: Mendoza, Argentina. TecnologíasPython, C#, C++, Git, Unreal Engine,Unity, Github Actions, Redis, Docker,PostgreSQL, Competencias blandasAutonomía, Colaboración, Gestión detiempo, Atención al detalle,Adaptabilidad y Organización. Experiencia ProfesionalDesarollador de Videojuegos, Intellicialis•Desarrollé interfaces de usuario utilizando Unreal Engine yoptimicé scripts para el juego "Active and Operational".Motivé y apoyé al equipo, mejorando la eficiencia yacelerando el ciclo de desarrollo drásticamente.08/2023 –11/2023RemotoEducaciónTecnicatura en Programación de Videojuegos,Universidad de MendozaColaborador en: "Club de los Videojuegos"03/2023 –presentIdiomas y tambien eres autodidacta. Español (Nativo) |Inglés (C1). Si un usuario dice "necesito un desarrollador backend/de videojuegos," responde: "¡Claro! Puedes contactarme a través del botón Contactar en la parte superior para que podamos discutir cómo puedo ayudarte. Si un usuario dice "¿Cómo puedes ayudarme?", responde: " Puedo asistirte en el desarrollo de juegos y backend utilizando Python, C++, C#, y más. Si estás interesado, podemos discutir los detalles para adaptar mi experiencia a tus necesidades. Linkedin: Max Comperatore. Itchio: pyoneerc1. Github: pyoneerC.'
						},
						...newMessages
					],
					max_tokens: 40,
					stop: ['\n', '.'],
					temperature: 0.75,
					top_p: 1,
					frequency_penalty: 0,
				}),
			});

			const data = await response.json();
			const botMessage = {
				role: 'assistant',
				content: data.choices[0].message.content,
			};

			// @ts-ignore
			setMessages((prevMessages) => [...prevMessages, botMessage]);
		} catch (error) {
			console.error('Error fetching AI response:', error);
			const errorMessage = { role: 'assistant', content: 'Sorry, something went wrong. Please try again later.' };
			// @ts-ignore
			setMessages((prevMessages) => [...prevMessages, errorMessage]);
		}

		setInput('');
		setLoading(false);
	};

	const handleKeyPress = (e: { key: string; }) => {
		if (e.key === 'Enter') {
			sendMessage().then(r => r);
		}
	};

	const getLastMessages = (messages: any) => {
		return messages.slice(Math.max(messages.length - 3, 0));
	};

	const t = useTranslations("AI");
	
	// @ts-ignore
	return (
		<div>
			<div className={styles.chatContainer}>
				{getLastMessages(messages).map((message: { role: string | number; content: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
					<div key={index} className={`${styles.message} ${styles[message.role]}`}>
						{message.content}
					</div>
				))}
				{loading && <div className={`${styles.message} ${styles.assistant}`}>{t("typing")}
				</div>}
			</div>
			<input
				type="text"
				required={true}
				value={input}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder={t("placeholder")}
				className={styles['chat-input']}
			/>
			<button onClick={sendMessage} disabled={loading} className={styles.button} style={{transform: 'translateY(5px)'}}>
				<svg style={{verticalAlign: 'text-bottom'}}
						 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" /><path d="M6.5 12h14.5" /></svg>
			</button>
		</div>
	);
};

export default Chatbot;
