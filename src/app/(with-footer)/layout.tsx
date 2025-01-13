"use client";

import { Footer } from "~/components/Footer";
import { useEffect, useState } from "react";

export default function WithFooterLayout({
																					 children,
																				 }: Readonly<{
	children: React.ReactNode;
}>) {
	const [currentURL, setCurrentURL] = useState(""); // Initialize as an empty string

	useEffect(() => {
		// Set the current URL when the component mounts
		setCurrentURL(window.location.href);

		let targetScroll = 0; // Target scroll position
		let isAnimating = false; // Animation flag
		let lastScrollTime = 0; // Timestamp of last scroll

		const smoothScroll = (event: { preventDefault: () => void; deltaY: number }) => {
			event.preventDefault();

			// Update target scroll position based on scroll delta
			targetScroll += event.deltaY;
			targetScroll = Math.max(
				0,
				Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
			); // Clamp to bounds

			// Start animation if it's not already running
			if (!isAnimating) {
				isAnimating = true;
				requestAnimationFrame(animateScroll);
			}

			lastScrollTime = Date.now(); // Update the last scroll time
		};

		const animateScroll = () => {
			const currentScroll = window.scrollY;
			const scrollDiff = targetScroll - currentScroll;

			// Apply an ease-out easing function for smooth deceleration
			const easeOutFactor = 0.08; // Adjust for smoothness
			const newScroll = currentScroll + scrollDiff * easeOutFactor;

			// Scroll to the interpolated position
			window.scrollTo(0, newScroll);

			// Continue animating until the difference is negligible
			if (Math.abs(scrollDiff) > 0.5) {
				requestAnimationFrame(animateScroll);
			} else {
				isAnimating = false; // Stop animation
				window.scrollTo(0, targetScroll); // Snap to target to ensure accuracy
			}
		};

		const handleManualScroll = () => {
			// Update targetScroll to match user's manual scrolling
			if (Date.now() - lastScrollTime > 825) {
				targetScroll = window.scrollY;
			}
		};

		const checkURLChange = () => {
			if (window.location.href !== currentURL) {
				setCurrentURL(window.location.href);
				targetScroll = 0; // Reset target position on URL change
				window.scrollTo(0, 0);
			}
		};

		// Interval to check for URL changes
		const intervalId = setInterval(checkURLChange, 100);

		// Add event listeners
		window.addEventListener("wheel", smoothScroll, { passive: false });
		window.addEventListener("scroll", handleManualScroll);

		return () => {
			// Cleanup event listeners and intervals
			window.removeEventListener("wheel", smoothScroll);
			window.removeEventListener("scroll", handleManualScroll);
			clearInterval(intervalId);
		};
	}, [currentURL]);

	return (
		<>
			{children}
			<Footer />
		</>
	);
}
