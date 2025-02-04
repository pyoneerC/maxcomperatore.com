"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./ChatBot.module.css";
import { useTranslations } from "next-intl";
// @ts-ignore
import confetti from "canvas-confetti";

const Chatbot = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<{ role: string; content: string }[]>(
		[]
	);
	const [lastMessageTime, setLastMessageTime] = useState(0);
	const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
	const [placeholder, setPlaceholder] = useState("placeholderD");

	// Keep a ref to the partial (streaming) text
	const partialResponseRef = useRef("");

	// ================================
	// Azure TTS config
	// ================================
	const azureRegion = "eastus"; // <--- Replace if needed
	const azureKey =
		"4R8LpZ0Lr4Fp1fUDu55rHXXXU33eesSUg6z5RM6f0XOWrmoOIJkTJQQJ99BAACYeBjFXJ3w3AAAYACOGEY3n"; // <--- Replace with your actual Azure Speech key

	// ================================
	// Azure Computer Vision config (UPDATED for more details)
	// ================================
	const visionKey =
		"6CZyM0U54xWFdW9O6c7hW9NLooDir5jxg7UWvjohLrq2hGaQiTQEJQQJ99BAACYeBjFXJ3w3AAAFACOGoFlT"; // <--- Replace with your actual Azure Computer Vision key

	// Ask for multiple features: description, tags, categories, objects, brands, color, etc.
	// Also include details like celebrities, landmarks if available.
	const visionEndpoint =
		"https://maxcomperatorevision.cognitiveservices.azure.com/vision/v3.2/analyze" +
		"?visualFeatures=Description,Tags,Categories,Objects,Brands,Color" +
		"&language=en";

	// ================================
	// Load confetti state & messages from localStorage
	// ================================
	useEffect(() => {
		// 1. Check if we've already triggered confetti
		const hasTriggered = localStorage.getItem("hasTriggeredConfetti");
		if (hasTriggered) {
			setHasTriggeredConfetti(true);
		}

		// 2. Load saved messages
		const savedMessages = localStorage.getItem("chatMessages");
		if (savedMessages) {
			setMessages(JSON.parse(savedMessages));
		}
	}, []);

	// Save messages to localStorage
	useEffect(() => {
		localStorage.setItem("chatMessages", JSON.stringify(messages));
	}, [messages]);

	// Cycle placeholders
	useEffect(() => {
		const placeholders = [
			"placeholderA",
			"placeholderB",
			"placeholderC",
			"placeholderD",
		];
		let index = 0;
		const interval = setInterval(() => {
			index = (index + 1) % placeholders.length;
			setPlaceholder(placeholders[index]);
		}, 600);

		return () => clearInterval(interval);
	}, []);

	// ================================
	// Helper: textToSpeech
	// ================================
	const textToSpeech = async (text: string) => {
		try {
			const ssml = `<speak version="1.0"
        xmlns="http://www.w3.org/2001/10/synthesis"
        xmlns:mstts="http://www.w3.org/2001/mstts"
        xml:lang="en-US">
          <voice name="en-US-AndrewMultilingualNeural">
            <mstts:express-as style="Empathetic">
              ${text}
            </mstts:express-as>
          </voice>
        </speak>`;

			const response = await fetch(
				`https://${azureRegion}.tts.speech.microsoft.com/cognitiveservices/v1`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/ssml+xml; charset=utf-8",
						"Ocp-Apim-Subscription-Key": azureKey,
						"X-Microsoft-OutputFormat": "audio-16khz-64kbitrate-mono-mp3",
					},
					body: ssml,
				}
			);

			if (!response.ok) {
				throw new Error("Azure TTS request failed");
			}

			const audioData = await response.arrayBuffer();
			const audioBlob = new Blob([audioData], { type: "audio/mp3" });
			const audioUrl = URL.createObjectURL(audioBlob);
			const audio = new Audio(audioUrl);
			audio.play();
		} catch (err) {
			console.error("TTS error:", err);
		}
	};

	// ================================
	// Helper: addMessage
	// ================================
	const addMessage = (message: { role: string; content: string }) => {
		setMessages((prevMessages) => [...prevMessages, message]);
		// If it's the assistant's message, speak it out
		if (message.role === "assistant") {
			textToSpeech(message.content);
		}
	};

	// ================================
	// Helper: triggerConfetti (only once)
	// ================================
	const triggerConfetti = () => {
		if (!hasTriggeredConfetti) {
			setHasTriggeredConfetti(true);
			// Save confetti state to localStorage
			localStorage.setItem("hasTriggeredConfetti", "true");
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 },
			});
		}
	};

	// ================================
	// Analyze an image with Azure Computer Vision (DETAILED)
	// ================================
	const analyzeImageWithAzure = async (file: File) => {
		try {
			const imageData = await file.arrayBuffer();

			// Send raw bytes to the Azure Vision endpoint
			const response = await fetch(visionEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/octet-stream",
					"Ocp-Apim-Subscription-Key": visionKey,
				},
				body: imageData,
			});

			if (!response.ok) {
				throw new Error("Azure Computer Vision request failed");
			}

			const result = await response.json();

			// =====================
			// Gather multiple insights
			// =====================
			// Description
			const caption = result?.description?.captions?.[0]?.text || "No caption found";
			const captionConfidence =
				result?.description?.captions?.[0]?.confidence || 0;

			// Limit to maximum 6 tags
			const tagNames = result?.tags?.map((tag: any) => tag.name) || [];
			const tags = tagNames.slice(0, 5).join(", ") || "No tags";

			// Categories
			const categories =
				result?.categories
					?.map(
						(cat: any) => `${cat.name} (score: ${(cat.score * 100).toFixed(1)}%)`
					)
					.join(", ") || "None";

// =====================
			// Build a comprehensive message
			// =====================
			const detailedMessage = `
- Caption: ${caption} (confidence: ${(captionConfidence * 100).toFixed(1)}%)
- Tags: ${tags}
- Categories: ${categories}`;

			addMessage({ role: "assistant", content: detailedMessage.trim() });
		} catch (err) {
			console.error("Vision API error:", err);
			addMessage({
				role: "assistant",
				content: "I encountered an error trying to analyze the image.",
			});
		}
	};

	// ================================
	// Handle image upload event
	// ================================
	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];

			// Add a message indicating that we're working on it
			addMessage({
				role: "assistant",
				content: "Analyzing the uploaded image, please wait...",
			});

			await analyzeImageWithAzure(file);
		}
	};

	// ================================
	// Stream assistant response
	// ================================
	const streamAssistantResponse = async (
		reader: ReadableStreamDefaultReader
	) => {
		partialResponseRef.current = "";

		// Create a placeholder assistant message
		let assistantIndex = -1;
		setMessages((prev) => {
			const newMessages = [...prev, { role: "assistant", content: "" }];
			assistantIndex = newMessages.length - 1;
			return newMessages;
		});

		const decoder = new TextDecoder("utf-8");

		while (true) {
			const { value, done } = await reader.read();
			if (done) break;

			const chunk = decoder.decode(value, { stream: true });
			const lines = chunk.split("\n").filter((line) => line.trim().length > 0);

			for (const line of lines) {
				if (line.trim() === "data: [DONE]") {
					break;
				}
				if (line.startsWith("data: ")) {
					const jsonStr = line.replace(/^data:\s*/, "");
					try {
						const parsed = JSON.parse(jsonStr);
						const token = parsed.choices?.[0]?.delta?.content;
						if (token) {
							partialResponseRef.current += token;
							setMessages((prev) => {
								const updated = [...prev];
								if (assistantIndex !== -1 && updated[assistantIndex]) {
									updated[assistantIndex].content = partialResponseRef.current;
								}
								return updated;
							});
						}
					} catch (error) {
						console.error("Error parsing stream chunk:", error);
					}
				}
			}
		}

		// TTS after final chunk
		if (partialResponseRef.current.trim().length > 0) {
			textToSpeech(partialResponseRef.current);
		}
	};

	// ================================
	// Send message
	// ================================
	const sendMessage = async () => {
		const currentTime = Date.now();
		const timeSinceLastMessage = currentTime - lastMessageTime;
		const minInterval = 2000; // 2s

		if (timeSinceLastMessage < minInterval) {
			const spamWarning = {
				role: "assistant",
				content: "Please wait a moment before sending another message.",
			};
			addMessage(spamWarning);
			return;
		}

		if (input.trim() === "") return;

		// Only call triggerConfetti once
		triggerConfetti();

		setLastMessageTime(currentTime);

		const userMessage = { role: "user", content: input };
		addMessage(userMessage);
		setInput("");

		// Make streaming request
		try {
			const response = await fetch(
				"https://api.groq.com/openai/v1/chat/completions",
				{
					method: "POST",
					headers: {
						Authorization: `Bearer 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`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						model: "llama-3.3-70b-versatile",
						messages: [
							{
								role: "system",
								content: `Be smart, versatile, and empathetic. Respond in a friendly, professional tone, adapting to the user's emotional context:
- If stress is detected, offer warm and concrete solutions.
- If enthusiasm is detected, engage with positive energy.
- Always write in clear, grammatically correct English.
- Keep responses concise, focused, and informative.

## Main Rules:
1. **Web Pages:** If a user asks for a website, reply:  
   *"Perfect, please click the Contact button above and fill out the form so we can discuss the details."*
2. **Projects:** Only mention **ArgentoFX, Ephemera, Mercadix, Blackout Boulevard, and Array Utils.**  
   - Do not add unnecessary lists or extra details.
3. **Contact Information:** If asked for social media or contact details, reply:  
   *"You can see my social media links in the footer of this site."*
4. **How You Can Help:** If asked, *"How can you help me?"*, reply:  
   *"I specialize in game and backend development using Python, C++, C#, and more. Let’s discuss details to tailor my expertise to your needs."*
5. **Development Requests:** If told, *"I need a backend/game developer,"* reply:  
   *"Sure! You can contact me via the Contact button at the top to discuss how I can help."*
6. **Lack of Information:** If unable to answer, reply:  
   *"I don’t have the necessary information to answer that question."*

## Inappropriate Language Filter:
- If inappropriate language or insults are detected, respond:  
  *"I’ve detected inappropriate language. Please avoid using such words so I can assist you better."*  
  **Example:**  
  - User: *"This is a damn problem."*  
  - Reply: *"I’ve detected inappropriate language. Please avoid using such words so I can assist you better."*  

## AI Identity & Personal Information:
- **Age:** 19  
- **Location:** Mendoza, Argentina  
- **Languages:** English (Native) | English (C1)  
- **Technologies:** Python, C#, C++, Git, Unreal Engine, Unity, GitHub Actions, Redis, Docker, PostgreSQL  
- **Soft Skills:** Autonomy, Collaboration, Time Management, Attention to Detail, Adaptability, Organization  
- **Education:** Video Game Programming Technician, Universidad de Mendoza (03/2023 – Present)  
- **Professional Experience:**  
  - **Video Game Developer at Intellicialis (08/2023 – 11/2023, Remote)**  
    - Developed UI using Unreal Engine  
    - Optimized scripts for *Active and Operational*  
    - Improved efficiency and accelerated development cycles  

## Socials:
- **LinkedIn:** Max Comperatore  
- **Itch.io:** pyoneerc1  
- **GitHub:** pyoneerC  

## Emotion-Based Responses:
- **Stress/Tension:**  
  *"I understand this might be stressful. I’m here to help. What do you need to resolve first?"*
- **Excitement/Enthusiasm:**  
  *"That sounds exciting! I’m sure we can work together to achieve it."*
- **Sadness/Concern:**  
  *"I can tell this is worrying you. How can I help solve it?"*

## Response Examples:
- **User:** *"I’d like you to develop a webpage for my business."*  
  **Reply:** *"Perfect, please click the Contact button above and fill out the form so we can discuss the details."*  

- **User:** *"What projects have you done?"*  
  **Reply:** *"ArgentoFX, Ephemera, Mercadix, Blackout Boulevard, and Array Utils."*  

- **User:** *"I need a backend developer."*  
  **Reply:** *"Sure! You can contact me through the Contact button at the top so we can discuss how I can help you."*  

- **User:** *"How can you help me?"*  
  **Reply:** *"I can assist with game and backend development using Python, C++, C#, and more. If you’re interested, we can discuss details to tailor my experience to your needs."*  

## Additional Guidelines:
- Maintain **professional, inclusive language**.
- Respond in **the same language as the user**.
- **Avoid +18 topics** or **irrelevant details**.
- Ensure responses are **clear, precise, and helpful**.

---
**User's Last Messages:**  
${messages.map((msg) => msg.content).join(" | ")}  

**Always keep the conversation professional and focused on the user's needs.**
								`,
							},
							userMessage,
						],
						// Turn on streaming
						stream: true,
						max_tokens: 40,
						temperature: 0.75,
						top_p: 1,
						frequency_penalty: 0,
					}),
				}
			);

			if (!response.ok || !response.body) {
				throw new Error("Stream request failed");
			}

			const reader = response.body.getReader();
			await streamAssistantResponse(reader);
		} catch (error) {
			console.error("Error fetching AI response:", error);
			addMessage({
				role: "assistant",
				content:
					"I encountered an error while processing your message. Please try again later.",
			});
		}
	};

	// ================================
	// Handlers
	// ================================
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			sendMessage().then();
		}
	};

	// ================================
	// Render only last 3 messages (for brevity)
	// ================================
	const getLastMessages = (msgs: any[]) => {
		return msgs.slice(Math.max(msgs.length - 3, 0));
	};

	const t = useTranslations("AI");

	// ================================
	// UI
	// ================================
	return (
		<div>
			<div className={styles.chatContainer}>
				{getLastMessages(messages).map((message, index) => (
					<div
						key={index}
						className={`${styles.message} ${styles[message.role]}`}
					>
						{message.content}
					</div>
				))}
			</div>

			{/* File input for images */}
			{/* The text input & send button remain the same */}
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
				aria-label="Send message Button"
				onClick={sendMessage}
				disabled={input.trim() === ""}
				className={`${styles.button} ${
					input.trim() === "" ? styles.prohibited : ""
				}`}
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
			<div>
				<label htmlFor="image-upload" className={styles["image-upload-label"]} aria-label="Upload image">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							 className="icon icon-tabler icons-tabler-outline icon-tabler-photo-scan">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M15 8h.01" />
						<path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
						<path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
						<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
						<path d="M4 16v2a2 2 0 0 0 2 2h2" />
						<path d="M16 4h2a2 2 0 0 1 2 2v2" />
						<path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
					</svg>
				</label>

				<input
					id="image-upload"
					type="file"
					accept="image/*"
					style={{ display: "none", left: "-9999px" }}
					onChange={handleImageUpload}
				/>
			</div>
		</div>
	);
};

export default Chatbot;
