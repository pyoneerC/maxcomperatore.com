"use client";

import { Footer } from "~/components/Footer";
import { useEffect } from "react";

export default function WithFooterLayout({
																					 children,
																				 }: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Initialize variables
		let targetScroll = window.scrollY; // start at current scroll position
		let isAnimating = false;
		let lastScrollTime = 0;
		let lastURL = window.location.href; // to track URL changes
		let animationFrameId: number | null = null;

		// Smooth scroll handler for mouse wheel events
		const smoothScroll = (event: WheelEvent) => {
			event.preventDefault();

			// Update target scroll position
			targetScroll += event.deltaY;
			targetScroll = Math.max(
				0,
				Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
			);

			// Start the animation if not already running
			if (!isAnimating) {
				isAnimating = true;
				animationFrameId = requestAnimationFrame(animateScroll);
			}

			lastScrollTime = Date.now();
		};

		// The animation loop using requestAnimationFrame
		const animateScroll = () => {
			const currentScroll = window.scrollY;
			const scrollDiff = targetScroll - currentScroll;

			// Ease-out interpolation
			const easeOutFactor = 0.08;
			const newScroll = currentScroll + scrollDiff * easeOutFactor;

			window.scrollTo(0, newScroll);

			// Continue animating until the remaining distance is small
			if (Math.abs(scrollDiff) > 0.5) {
				animationFrameId = requestAnimationFrame(animateScroll);
			} else {
				isAnimating = false;
				// Snap to the exact target position for accuracy
				window.scrollTo(0, targetScroll);
				animationFrameId = null;
			}
		};

		// Update targetScroll if the user scrolls manually
		const handleManualScroll = () => {
			if (Date.now() - lastScrollTime > 825) {
				targetScroll = window.scrollY;
			}
		};

		// Check if the URL has changed (e.g. via navigation)
		const checkURLChange = () => {
			if (window.location.href !== lastURL) {
				lastURL = window.location.href;
				targetScroll = 0; // Reset target scroll position
				window.scrollTo(0, 0);
			}
		};

		// Set up an interval to detect URL changes every 100ms
		const intervalId = setInterval(checkURLChange, 100);

		// Add event listeners for wheel and scroll events
		window.addEventListener("wheel", smoothScroll, { passive: false });
		window.addEventListener("scroll", handleManualScroll);

		// Cleanup: remove event listeners, cancel the interval, and cancel any animation frame.
		return () => {
			window.removeEventListener("wheel", smoothScroll);
			window.removeEventListener("scroll", handleManualScroll);
			clearInterval(intervalId);
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []); // empty dependency array: run only once on mount

	return (
		<>
			{children}
			<Footer />
		</>
	);
}
