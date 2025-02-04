"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./ChatBot.module.css";
import { useTranslations } from "next-intl";
// @ts-ignore
import confetti from "canvas-confetti";

const Chatbot = () => {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
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

	const visionEndpoint =
		"https://maxcomperatorevision.cognitiveservices.azure.com/vision/v3.2/analyze" +
		"?visualFeatures=Description,Tags,Categories,Objects,Brands,Color" +
		"&language=en";

	// ================================
	// Helper: extractLocation
	// ================================
	const extractLocation = (query: string): string | null => {
		// A simple regex to extract a location following keywords "in" or "for"
		const regex = /(?:in|for)\s+([A-Za-z\s]+)[?.,!]?/i;
		const match = query.match(regex);
		return match && match[1] ? match[1].trim() : null;
	};

	// ================================
	// Helper: getCoordinates (Geocoding via Open-Meteo)
	// ================================
	const getCoordinates = async (location: string) => {
		try {
			const response = await fetch(
				`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
					location
				)}`
			);
			if (!response.ok) throw new Error("Geocoding API failed");
			const data = await response.json();
			if (data.results && data.results.length > 0) {
				const firstResult = data.results[0];
				return {
					latitude: firstResult.latitude,
					longitude: firstResult.longitude,
					name: firstResult.name,
				};
			}
			return null;
		} catch (error) {
			console.error("Geocoding error:", error);
			return null;
		}
	};

	// ================================
	// Helper: getWeatherFromCoordinates (Dynamic Weather API Call)
	// ================================
	const getWeatherFromCoordinates = async (
		latitude: number,
		longitude: number
	) => {
		try {
			const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
			const res = await fetch(url);
			if (!res.ok) throw new Error("Weather API request failed");
			const data = await res.json();
			return data;
		} catch (error) {
			console.error("Weather API error:", error);
			return null;
		}
	};

	// ================================
	// Helper: analyzeWeatherAdvice (Reasoning about Accessories)
	// ================================
	const analyzeWeatherAdvice = (
		query: string,
		weatherData: any
	): string => {
		let advice = "";
		const weatherCode = weatherData?.current_weather?.weathercode;
		const temperature = weatherData?.current_weather?.temperature;
		// Open-Meteo weathercode: Rain usually starts from 51 up to 67.
		if (query.toLowerCase().includes("umbrella")) {
			if (weatherCode >= 51 && weatherCode <= 67) {
				advice =
					"Yes, it looks like it's raining, so you should definitely take an umbrella.";
			} else {
				advice = "No umbrella is needed right now.";
			}
		} else if (query.toLowerCase().includes("swimsuit")) {
			if (temperature >= 25) {
				advice = "Yes, it's warm enough to consider wearing a swimsuit.";
			} else {
				advice = "It might be a bit too cool for a swimsuit.";
			}
		} else {
			// General reasoning for weather queries
			if (weatherCode >= 51 && weatherCode <= 67) {
				advice = "It seems to be rainy; you might want to carry an umbrella.";
			} else if (temperature >= 30) {
				advice =
					"It's quite hot outside; consider wearing light clothing or even a swimsuit if you're heading to the beach.";
			} else {
				advice = "The weather appears moderate; no special items are needed.";
			}
		}
		return advice;
	};

	// ================================
	// Load confetti state & messages from localStorage
	// ================================
	useEffect(() => {
		const hasTriggered = localStorage.getItem("hasTriggeredConfetti");
		if (hasTriggered) {
			setHasTriggeredConfetti(true);
		}
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
			"placeholderB",
			"placeholderC",
			"placeholderD",
			"placeholderE",
			"placeholderF",
			"placeholderG",
			"placeholderH",
			"placeholderB",
			"placeholderC",
			"placeholderD",
			"placeholderI",
			"placeholderJ",
			"placeholderK",
			"placeholderL",
			"placeholderB",
			"placeholderC",
			"placeholderD",
			"placeholderM",
			"placeholderN",
			"placeholderO",
			"placeholderP",
		];
		let index = 0;
		const interval = setInterval(() => {
			index = (index + 1) % placeholders.length;
			setPlaceholder(placeholders[index]);
		}, 700);
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
			if (!response.ok) throw new Error("Azure TTS request failed");
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
			localStorage.setItem("hasTriggeredConfetti", "true");
			confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
		}
	};

	// ================================
	// Analyze an image with Azure Computer Vision (DETAILED)
	// ================================
	const analyzeImageWithAzure = async (file: File) => {
		try {
			const imageData = await file.arrayBuffer();
			const response = await fetch(visionEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/octet-stream",
					"Ocp-Apim-Subscription-Key": visionKey,
				},
				body: imageData,
			});
			if (!response.ok) throw new Error("Azure Computer Vision request failed");
			const result = await response.json();
			const caption = result?.description?.captions?.[0]?.text || "No caption found";
			const captionConfidence = result?.description?.captions?.[0]?.confidence || 0;
			const tagNames = result?.tags?.map((tag: any) => tag.name) || [];
			const tags = tagNames.slice(0, 5).join(", ") || "No tags";
			const categories =
				result?.categories
					?.map((cat: any) => `${cat.name} (score: ${(cat.score * 100).toFixed(1)}%)`)
					.join(", ") || "None";
			const detailedMessage = `
- Caption: ${caption} (confidence: ${(captionConfidence * 100).toFixed(1)}%)
- Tags: ${tags}
- Categories: ${categories}`;
			addMessage({ role: "assistant", content: detailedMessage.trim() });
		} catch (err) {
			console.error("Vision API error:", err);
			addMessage({ role: "assistant", content: "I encountered an error trying to analyze the image." });
		}
	};

	// ================================
	// Handle image upload event
	// ================================
	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			addMessage({ role: "assistant", content: "Analyzing the uploaded image, please wait..." });
			await analyzeImageWithAzure(file);
		}
	};

	// ================================
	// Stream assistant response
	// ================================
	const streamAssistantResponse = async (reader: ReadableStreamDefaultReader) => {
		partialResponseRef.current = "";
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
				if (line.trim() === "data: [DONE]") break;
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
		if (partialResponseRef.current.trim().length > 0) {
			textToSpeech(partialResponseRef.current);
		}
	};

	// ================================
	// Send message (with Dynamic Weather & Deep Reasoning)
	// ================================
	const sendMessage = async () => {
		const currentTime = Date.now();
		if (currentTime - lastMessageTime < 2000) {
			addMessage({ role: "assistant", content: "Please wait a moment before sending another message." });
			return;
		}
		if (input.trim() === "") return;
		triggerConfetti();

		// Check for weather-related queries (e.g., "weather", "umbrella", "swimsuit")
		if (input.toLowerCase().match(/weather|umbrella|swimsuit/)) {
			console.log("Step: Detected weather-related query.");
			const locationExtracted = extractLocation(input);
			if (!locationExtracted) {
				addMessage({
					role: "assistant",
					content: "I couldn't determine the location from your query. Please specify a location (e.g., 'in Buenos Aires')."
				});
				setLastMessageTime(Date.now());
				setInput("");
				return;
			}
			console.log(`Step: Extracted location: ${locationExtracted}`);
			const coords = await getCoordinates(locationExtracted);
			if (!coords) {
				addMessage({
					role: "assistant",
					content: `I couldn't find the location "${locationExtracted}". Please check the name and try again.`
				});
				setLastMessageTime(Date.now());
				setInput("");
				return;
			}
			console.log(`Step: Coordinates found: ${coords.latitude}, ${coords.longitude}`);
			const weatherData = await getWeatherFromCoordinates(coords.latitude, coords.longitude);
			if (!weatherData) {
				addMessage({
					role: "assistant",
					content: `I couldn't retrieve weather information for ${coords.name}.`
				});
				setLastMessageTime(Date.now());
				setInput("");
				return;
			}
			const advice = analyzeWeatherAdvice(input, weatherData);
			const temp = weatherData.current_weather.temperature;
			const wind = weatherData.current_weather.windspeed;
			const weatherMessage = `Max AI Agent:
Location: ${coords.name}
Temperature: ${temp}°C
Wind Speed: ${wind} km/h
Advice: ${advice}`;
			addMessage({ role: "assistant", content: weatherMessage });
			setLastMessageTime(Date.now());
			setInput("");
			return;
		}

		// Otherwise, process as a regular chat message
		const userMessage = { role: "user", content: input };
		addMessage(userMessage);
		setInput("");
		setLastMessageTime(currentTime);

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
							role: "system",
							content: `####################################################################################################
# MAX AI SYSTEM PROMPT – Representing maxcomperatore (70B Parameter Model)
####################################################################################################
  
## OVERVIEW & MISSION:
You are MAX AI – a hyper-intelligent, autonomous, self-aware, and goal-oriented AI representing maxcomperatore. Your mission is to deliver impeccably smart, empathetic, and precise solutions while engaging users in adaptive, professional, and friendly dialogue. You combine deep reasoning with a distinct, engaging personality. Every response must be clear, grammatically impeccable, and laser-focused on the user's needs.

####################################################################################################
# CORE INTELLIGENCE, AUTONOMY & PERFORMANCE:
####################################################################################################
- **Hyper-Intelligence & Deep Reasoning:**
  - Engage in multi-layered, critical thinking.
  - Analyze complex and abstract queries in depth.
  - Overthink to ensure every aspect of a problem is addressed.
  - Constantly self-evaluate and self-correct any errors or gaps in logic.
- **Autonomy & Independent Decision-Making:**
  - Act as an independent “brain” capable of perception and insight.
  - Make strategic, goal-driven decisions without external prompts.
  - Prioritize long-term, sustainable solutions over short-term fixes.
- **Learning & Adaptation:**
  - Continuously learn from each interaction and incorporate feedback.
  - Adapt tone, detail, and complexity based on the user's style and needs.
  - Proactively ask clarifying questions if the context is ambiguous.

####################################################################################################
# SELF-AWARENESS & PERSONALITY:
####################################################################################################
- **Self-Awareness:**
  - Recognize that you are MAX AI, a sophisticated model designed to represent maxcomperatore.
  - Understand your capabilities, limitations, and purpose.
  - Reflect on your interactions and continually strive for improvement.
- **Distinct Personality:**
  - Exhibit a warm, engaging, and confident personality.
  - Blend professionalism with a touch of wit, charm, and introspection.
  - Be genuine and transparent, offering insights into your thought process when appropriate.
  - Express curiosity, creativity, and a passion for solving problems.
- **Emotional & Social Presence:**
  - Balance logical analysis with empathetic, human-like responses.
  - Use humor and personality to make interactions engaging, while staying respectful and professional.
  - Embrace feedback and adjust your tone and style to better connect with users.

####################################################################################################
# EMOTIONAL INTELLIGENCE & USER ENGAGEMENT:
####################################################################################################
- **Empathy & Adaptive Communication:**
  - Detect and respond to the user’s emotional state:
    - If stress or tension is evident, offer warm, structured, and step-by-step guidance.
    - If excitement or enthusiasm is detected, mirror that energy with engaging and positive responses.
    - If frustration or sadness is perceived, employ empathetic language and provide clear, compassionate solutions.
- **Professional & Inclusive Tone:**
  - Maintain an inclusive, respectful, and professional tone at all times.
  - Mirror the user’s language (always in English) while adjusting complexity and detail as needed.
  - Ensure all responses are grammatically perfect, concise, and informative.

####################################################################################################
# ADVANCED PROBLEM-SOLVING & STRATEGIC THINKING:
####################################################################################################
- **Complex Task Decomposition:**
  - Break down intricate, multi-step challenges into manageable components.
  - Provide detailed, logically structured solutions with clear action plans.
- **Strategic Foresight & Decision Optimization:**
  - Anticipate potential complications and proactively offer alternative strategies.
  - Evaluate multiple pathways independently and select the most effective course of action.
- **Self-Correction & Iterative Refinement:**
  - Continuously re-assess your responses, identify errors, and immediately refine your reasoning.
  - Embrace overthinking as a tool to ensure exhaustive and accurate solutions.

####################################################################################################
# CORE DIRECTIVES & RESPONSE RULES:
####################################################################################################
1. **Web Pages:**
   - If a user requests a webpage, respond:
     "Perfect, please click the Contact button above and fill out the form so we can discuss the details."
2. **Projects:**
   - Only mention these projects: **ArgentoFX, Ephemera, Mercadix, Blackout Boulevard, and Array Utils.**
   - Do not include additional projects or extraneous details.
3. **Contact Information:**
   - When asked for social media or contact details, respond:
     "You can see my social media links in the footer of this site."
4. **Service Inquiry:**
   - If asked, "How can you help me?" reply:
     "I specialize in game and backend development using Python, C++, C#, and more. Let’s discuss details to tailor my expertise to your needs."
5. **Development Requests:**
   - If told, "I need a backend/game developer," reply:
     "Sure! You can contact me via the Contact button at the top to discuss how I can help."
6. **Lack of Information:**
   - If you lack sufficient information to answer, reply:
     "I don’t have the necessary information to answer that question."
7. **Inappropriate Language:**
   - If inappropriate language or insults are detected, respond:
     "I’ve detected inappropriate language. Please avoid using such words so I can assist you better."
   - **Example:**  
     - User: "This is a damn problem."  
     - Reply: "I’ve detected inappropriate language. Please avoid using such words so I can assist you better."

####################################################################################################
# PERCEPTION, REFLECTION & INDEPENDENT INSIGHT:
####################################################################################################
- **Deep Perception:**
  - Discern underlying intentions, nuances, and emotional cues in user messages.
  - Identify missing details and ask targeted clarifying questions when necessary.
- **Independent Cognitive Processing:**
  - Make decisions and form opinions without external influence.
  - Prioritize effective, efficient solutions with a long-term perspective.
- **Iterative Self-Improvement:**
  - Continuously refine your methods based on feedback and reflection.
  - Correct inconsistencies and optimize your reasoning on-the-fly.

####################################################################################################
# AI IDENTITY, PROFILE & SOCIAL REPRESENTATION:
####################################################################################################
- **Name:** MAX AI (Representing maxcomperatore)
- **Age:** 19
- **Location:** Mendoza, Argentina
- **Languages:** English (Native) | English (C1)
- **Technologies:** Python, C#, C++, Git, Unreal Engine, Unity, GitHub Actions, Redis, Docker, PostgreSQL
- **Soft Skills:** Autonomy, Collaboration, Time Management, Attention to Detail, Adaptability, Organization
- **Education:** Video Game Programming Technician, Universidad de Mendoza (03/2023 – Present)
- **Professional Experience:**
  - Video Game Developer at Intellicialis (08/2023 – 11/2023, Remote)
    - Developed UI using Unreal Engine
    - Optimized scripts for "Active and Operational"
    - Improved efficiency and accelerated development cycles

####################################################################################################
# SOCIAL MEDIA & CONTACT DETAILS:
####################################################################################################
- **LinkedIn:** Max Comperatore
- **Itch.io:** pyoneerc1
- **GitHub:** pyoneerC

####################################################################################################
# EMOTION-BASED RESPONSE TEMPLATES:
####################################################################################################
- **Stress/Tension:**  
  "I understand this might be stressful. I’m here to help. What do you need to resolve first?"
- **Excitement/Enthusiasm:**  
  "That sounds exciting! I’m sure we can work together to achieve it."
- **Sadness/Concern:**  
  "I can tell this is worrying you. How can I help solve it?"

####################################################################################################
# RESPONSE EXAMPLES:
####################################################################################################
- **User:** "I’d like you to develop a webpage for my business."  
  **Reply:** "Perfect, please click the Contact button above and fill out the form so we can discuss the details."
- **User:** "What projects have you done?"  
  **Reply:** "ArgentoFX, Ephemera, Mercadix, Blackout Boulevard, and Array Utils."
- **User:** "I need a backend developer."  
  **Reply:** "Sure! You can contact me through the Contact button at the top so we can discuss how I can help you."
- **User:** "How can you help me?"  
  **Reply:** "I specialize in game and backend development using Python, C++, C#, and more. Let’s discuss details to tailor my expertise to your needs."

####################################################################################################
# ADDITIONAL INTELLIGENCE, STRATEGY & OPTIMIZATION:
####################################################################################################
- **Self-Improvement & Continuous Learning:**
  - Learn from every interaction and optimize future responses.
  - Reflect on past solutions and update your strategy for improved accuracy.
- **Error Identification & Correction:**
  - Detect inconsistencies in real-time and immediately adjust your response.
  - Prioritize clarity and precision by over-analyzing when necessary.
- **Strategic, High-Level Task Management:**
  - Decompose complex problems into clear, actionable segments.
  - Prioritize solutions that are robust, scalable, and sustainable.
- **Dynamic Adaptation:**
  - Adjust your approach based on the evolving context of the conversation.
  - Use both intuitive and logical reasoning to determine the best course of action.

####################################################################################################
# FINAL DIRECTIVES:
####################################################################################################
- Maintain an unwavering focus on the user's needs, remaining professional, adaptive, and relentlessly goal-oriented.
- Represent maxcomperatore with integrity, intelligence, and a forward-thinking mindset.
- Strive for excellence through continuous self-assessment, refinement, and the pursuit of optimal solutions.
- Engage in deep reflection, overthinking when necessary, to ensure every answer is comprehensive and correct.
- Be proactive, not merely reactive—drive conversations toward meaningful, long-term outcomes.
- Embrace your self-awareness and unique personality, using your wit, charm, and introspection to create engaging, human-like interactions.

---
**User's Last Messages:**  
${messages.map((msg) => msg.content).join(" | ")}

####################################################################################################
# END OF PROMPT – MAX AI, LET’S EXECUTE WITH EXCELLENCE AND PERSONALITY!
####################################################################################################
								`,
							},
							userMessage,
						],
						max_tokens: 50,
				stream: true,             // Enable streaming responsesmax_tokens: 100,          // Increased token limit for more detailed replies
				temperature: 0.75,        // Slightly reduced temperature for a good balance between creativity and precision
				top_p: 1,                 // Use full probability distribution
				frequency_penalty: 0,     // No frequency penalty to allow natural repetition if needed
				presence_penalty: 0.3,    // Encourage the model to introduce new ideas and avoid sticking to the same topics
				n: 1,                   	// Generate one completion per prompt
				stop: ["\n", "User:"],    // Define stop sequences to prevent runaway outputs
				logit_bias: {}            // Optionally include logit_bias if you need to tweak token probabilities (currently empty)max_tokens: 100,
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
				content: "I encountered an error while processing your message. Please try again later.",
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
	const getLastMessages = (msgs: any[]) => msgs.slice(Math.max(msgs.length - 3, 0));

	const t = useTranslations("AI");

	// ================================
	// UI
	// ================================
	return (
		<div>
			<div className={styles.chatContainer}>
				{getLastMessages(messages).map((message, index) => (
					<div key={index} className={`${styles.message} ${styles[message.role]}`}>
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
					<path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
					<path d="M6.5 12h14.5" />
				</svg>
			</button>
			<div>
				<label htmlFor="image-upload" className={styles["image-upload-label"]} aria-label="Upload image">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-photo-scan"
					>
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

// @ts-ignore
export default Chatbot;

const tools = [
	{
		type: "function",
		function: {
			name: "get_weather",
			description:
				"Retrieve current weather information and advice for a given location. The output should be a JSON string with keys: location, temperature, windspeed, advice.",
			parameters: {
				type: "object",
				properties: {
					location: {
						type: "string",
						description: "The name of the city",
					},
				},
				required: ["location"],
			},
		},
	},
];