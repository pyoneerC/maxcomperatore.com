"use client"

import React, { useState } from 'react';

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
					model: 'llama3-70b-8192',
					messages: [
						{ role: 'system', content: 'Responde preguntas sobre Máximo Comperatore' },
						...newMessages
					],
					max_tokens: 50,
					stop: ['\n'],
					temperature: 1.2,
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
			sendMessage();
		}
	};

	// @ts-ignore
	return (
		<div className="chatbot-container">
			<div className="chatbox">
				{messages.map((message, index) => (
					<div key={index} className={`message ${message["role"]}`}>
						{message["content"]}
					</div>
				))}
				{loading && <div className="message assistant">Loading...</div>}
			</div>
			<input
				type="text"
				value={input}
				onChange={handleInputChange}
				onKeyPress={handleKeyPress}
				placeholder="Type your message..."
				className="chat-input"
			/>
			<button onClick={sendMessage} disabled={loading} className="send-button">
				Send
			</button>
		</div>
	);
};

export default Chatbot;
