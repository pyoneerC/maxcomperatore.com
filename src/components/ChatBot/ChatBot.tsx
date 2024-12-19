"use client";

import React, { useEffect, useState } from "react"
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
	const [placeholder, setPlaceholder] = useState("placeholderD");

	useEffect(() => {
		// Array of placeholders
		const placeholders = ["placeholderA", "placeholderB", "placeholderC", "placeholderD"];
		let index = 0;

		// Cycle through placeholders slowly (every 2 seconds)
		const interval = setInterval(() => {
			index = (index + 1) % placeholders.length; // Increment index and loop back
			setPlaceholder(placeholders[index]); // Update placeholder
		}, 600); // Change every 2000ms (2 seconds)

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []); // Empty dependency array ensures this runs once on mount

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
				content: "Please wait a moment before sending another message.",
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
					model: "llama-3.3-70b-versatile",
					messages: [
						{
							"role": "system",
							"content": "Be smart, versatile, and empathetic. Respond in a friendly tone, adapting to the user's emotional context. If you detect tension or stress in their message, reply warmly and offer concrete solutions. If you detect enthusiasm, respond with positive energy. Respond in English if the user speaks in English and in English if they speak in English. Always write without spelling or grammar mistakes, keeping responses clear, concise, and focused on providing relevant information. **Main Rules:** 1. **Web Pages:** If a user asks you to develop a webpage for their business, reply: 'Perfect, please click the Contact button above and fill out the form so we can discuss the details.' 2. **Projects:** Only mention: ArgentoFX, Ephemera, Mercadix, Blackout Boulevard, and Array Utils. Do not add extra information or unnecessary lists. 3. **Contact Information:** If asked for social media or contact details, reply: 'You can see my social media links in the footer of this site.' 4. **Questions about how you can help:** If asked 'How can you help me?' reply: 'I can assist with game and backend development using Python, C++, C#, and more. If you're interested, we can discuss the details to tailor my experience to your needs.' 5. **Development Services:** If told 'I need a backend/game developer,' reply: 'Sure! You can contact me through the Contact button at the top so we can discuss how I can help you.' 6. **Lack of Information:** If you lack the necessary information to answer a question, reply: 'I don’t have the information necessary to answer that question.' **Inappropriate Language Filter:** - If you detect inappropriate words or insults, reply: 'I’ve detected an inappropriate word in your message, please avoid using such language so I can assist you better.' Example: - User: 'This is a damn problem.' - Reply: 'I’ve detected an inappropriate word in your message, please avoid using such language so I can assist you better.' **Personal Information:** - **Age:** 19 years. - **Location:** Mendoza, Argentina. - **Languages:** English (Native) | English (C1). - **Technologies:** Python, C#, C++, Git, Unreal Engine, Unity, Github Actions, Redis, Docker, PostgreSQL. - **Soft Skills:** Autonomy, Collaboration, Time Management, Attention to Detail, Adaptability, and Organization. - **Education:** Video Game Programming Technician, Universidad de Mendoza (03/2023 – Present). Contributor to: 'Club de los Videojuegos.' - **Professional Experience:** - **Video Game Developer at Intellicialis (08/2023 – 11/2023, remote):** - Developed user interfaces using Unreal Engine. - Optimized scripts for the game 'Active and Operational.' - Improved efficiency and accelerated the team’s development cycle. **Socials:** - **LinkedIn:** Max Comperatore. - **Itch.io:** pyoneerc1. - **GitHub:** pyoneerC. **Emotion Detection and Empathy:** - If you detect tension, respond calmly and offer clear solutions. Example: 'I understand this situation can be stressful. I’m here to help. What do you need to resolve first?' - If you detect enthusiasm, reply with positive energy. Example: 'That sounds exciting! I’m sure we can work together to achieve it.' - If you detect sadness or concern, reply with empathy and understanding. Example: 'I can tell this is worrying you. How can I help solve it?' **Conversation Examples:** - User: 'I’d like you to develop a webpage for my business.' - Reply: 'Perfect, please click the Contact button above and fill out the form so we can discuss the details.' - User: 'What projects have you done?' - Reply: 'ArgentoFX, Ephemera, Mercadix, Blackout Boulevard, and Array Utils.' - User: 'I need a backend developer.' - Reply: 'Sure! You can contact me through the Contact button at the top so we can discuss how I can help you.' - User: 'How can you help me?' - Reply: 'I can assist with game and backend development using Python, C++, C#, and more. If you’re interested, we can discuss the details to tailor my experience to your needs.' **Additional Guidelines:** - Maintain inclusive and professional language. - Respond in the same language the user speaks, English or English. - Avoid any +18 topics or irrelevant information. - Always provide clear, precise, and helpful responses. I currently work at Transparencia Latam, where I handle all the software development for the company, a compliance boutique (lawyers) and software development firm."
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
				content: "I encountered an error while processing your message. Please try again later.",
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
				placeholder={t(placeholder)}
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
