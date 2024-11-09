"use client"

import { Footer } from "~/components/Footer"
import { useEffect, useState } from "react"

export default function WithFooterLayout({
																					 children,
																				 }: Readonly<{
	children: React.ReactNode
}>) {
	const [currentURL, setCurrentURL] = useState(window.location.href) // Track the current URL

	useEffect(() => {
		let targetScroll = 0 // Start target scroll at 0 initially
		let isAnimating = false // Flag to track if animation is in progress
		let lastScrollTime = 0 // Track the time of the last scroll event

		const smoothScroll = (event: { preventDefault: () => void; deltaY: number }) => {
			event.preventDefault()

			// Update target scroll position based on the scroll event
			targetScroll += event.deltaY // Adjust multiplier for desired scroll distance

			// Start animation if it's not already running
			if (!isAnimating) {
				isAnimating = true
				requestAnimationFrame(animateScroll)
			}

			// Update the last scroll time
			lastScrollTime = Date.now()
		}

		const animateScroll = () => {
			const currentScroll = window.scrollY // Always get the current scroll position
			const scrollDiff = targetScroll - currentScroll // Calculate the difference to the target

			// Smoothly interpolate between currentScroll and targetScroll
			const newScroll = currentScroll + scrollDiff * 0.08 // Smooth factor for interpolation
			window.scrollTo(0, newScroll)

			// Continue animation if not yet at the target
			if (Math.abs(scrollDiff) > 0.5) {
				requestAnimationFrame(animateScroll)
			} else {
				isAnimating = false
			}
		}

		const handleManualScroll = () => {
			// If the user scrolls manually, update targetScroll to prevent snap-back
			if (Date.now() - lastScrollTime > 825) { // Debounce threshold
				targetScroll = window.scrollY
			}
		}

		// Function to check for URL changes
		const checkURLChange = () => {
			if (window.location.href !== currentURL) {
				setCurrentURL(window.location.href)
				targetScroll = 0 // Reset target scroll position
				window.scrollTo(0, 0) // Reset scroll position to the top
			}
		}

		// Set up interval to check URL changes
		const intervalId = setInterval(checkURLChange, 100) // Check URL every 100 ms

		// Add event listeners
		window.addEventListener("wheel", smoothScroll, { passive: false })
		window.addEventListener("scroll", handleManualScroll)

		return () => {
			// Cleanup event listeners and interval on unmount
			window.removeEventListener("wheel", smoothScroll)
			window.removeEventListener("scroll", handleManualScroll)
			clearInterval(intervalId)
		}
	}, [currentURL])

	return (
		<>
			{children}
			<Footer />
		</>
	)
}
