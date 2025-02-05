"use client";

import { Footer } from "~/components/Footer";
import { useEffect } from "react";

export default function WithFooterLayout({
																					 children,
																				 }: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		// Initialize our variables
		let targetScroll = window.scrollY; // Start at current scroll position
		let isAnimating = false;
		let lastScrollTime = 0;
		let lastURL = window.location.href; // To detect page changes
		let animationFrameId: number | null = null;

		// Smooth scroll handler for wheel events
		const smoothScroll = (event: WheelEvent) => {
			event.preventDefault();

			// Update targetScroll based on the scroll delta
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

		// Animation loop that gradually scrolls to the target
		const animateScroll = () => {
			const currentScroll = window.scrollY;
			const scrollDiff = targetScroll - currentScroll;

			// Ease-out interpolation for smooth deceleration
			const easeOutFactor = 0.08;
			const newScroll = currentScroll + scrollDiff * easeOutFactor;
			window.scrollTo(0, newScroll);

			// Continue animating until the difference is negligible
			if (Math.abs(scrollDiff) > 0.5) {
				animationFrameId = requestAnimationFrame(animateScroll);
			} else {
				isAnimating = false;
				// Snap to the exact target to ensure accuracy
				window.scrollTo(0, targetScroll);
				animationFrameId = null;
			}
		};

		// If the user scrolls manually (outside our wheel event), update targetScroll
		const handleManualScroll = () => {
			if (Date.now() - lastScrollTime > 825) {
				targetScroll = window.scrollY;
			}
		};

		// Detect URL changes (page transitions)
		const checkURLChange = () => {
			if (window.location.href !== lastURL) {
				lastURL = window.location.href;
				targetScroll = 0; // Set target to top of page
				// Instead of an abrupt jump, start a smooth scroll to the top
				if (!isAnimating) {
					isAnimating = true;
					animationFrameId = requestAnimationFrame(animateScroll);
				}
			}
		};

		// Check for URL changes every 100ms
		const intervalId = setInterval(checkURLChange, 100);

		// Add event listeners for wheel and scroll events
		window.addEventListener("wheel", smoothScroll, { passive: false });
		window.addEventListener("scroll", handleManualScroll);

		// Cleanup on unmount
		return () => {
			window.removeEventListener("wheel", smoothScroll);
			window.removeEventListener("scroll", handleManualScroll);
			clearInterval(intervalId);
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, []); // Runs once on mount

	return (
		<>
			{children}
			<Footer />
		</>
	);
}
