"use client";

import { Footer } from "~/components/Footer";
import { useEffect } from "react";

export default function WithFooterLayout({
																					 children,
																				 }: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Initialize state variables
		let targetScroll = window.scrollY;
		let isAnimating = false;
		let lastScrollTime = 0;
		let lastURL = window.location.href;
		let animationFrameId: number | null = null;
		let lastFrameTime: number | null = null;

		/**
		 * Animates the scroll using a time-based delta for smooth performance.
		 * @param currentTime - The current timestamp from requestAnimationFrame.
		 */
		const animateScroll = (currentTime: number) => {
			if (lastFrameTime === null) {
				lastFrameTime = currentTime;
			}
			const deltaTime = currentTime - lastFrameTime;
			lastFrameTime = currentTime;

			const currentScroll = window.scrollY;
			const scrollDiff = targetScroll - currentScroll;

			// Calculate the scroll step based on the delta time
			const scrollStep = scrollDiff * 0.1 * (deltaTime / 16.67);
			const newScroll = currentScroll + scrollStep;
			window.scrollTo(0, newScroll);

			if (Math.abs(scrollDiff) > 0.5) {
				animationFrameId = requestAnimationFrame(animateScroll);
			} else {
				isAnimating = false;
				window.scrollTo(0, targetScroll); // Snap to target position
				animationFrameId = null;
				lastFrameTime = null;
			}
		};

		/**
		 * Handles wheel events to update the target scroll position and initiate the smooth scroll.
		 */
		const handleWheelEvent = (event: WheelEvent) => {
			event.preventDefault();

			targetScroll += event.deltaY;
			targetScroll = Math.max(
				0,
				Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
			);

			if (!isAnimating) {
				isAnimating = true;
				lastFrameTime = null;
				animationFrameId = requestAnimationFrame(animateScroll);
			}

			lastScrollTime = Date.now();
		};

		/**
		 * Updates targetScroll if the user scrolls manually.
		 */
		const handleManualScroll = () => {
			if (Date.now() - lastScrollTime > 825) {
				targetScroll = window.scrollY;
			}
		};

		/**
		 * Detects URL changes and triggers a smooth scroll to the top.
		 */
		const checkURLChange = () => {
			if (window.location.href !== lastURL) {
				lastURL = window.location.href;
				targetScroll = 0;
				if (!isAnimating) {
					isAnimating = true;
					lastFrameTime = null;
					animationFrameId = requestAnimationFrame(animateScroll);
				}
			}
		};

		const urlCheckInterval = setInterval(checkURLChange, 100);
		window.addEventListener("wheel", handleWheelEvent, { passive: false });
		window.addEventListener("scroll", handleManualScroll);

		return () => {
			window.removeEventListener("wheel", handleWheelEvent);
			window.removeEventListener("scroll", handleManualScroll);
			clearInterval(urlCheckInterval);
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []);

	return (
		<>
			{children}
			<Footer />
		</>
	);
}
