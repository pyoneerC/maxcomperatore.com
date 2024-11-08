"use client"

import { Footer } from "~/components/Footer"
import { useEffect } from "react"

export default function WithFooterLayout({
																					 children,
																				 }: Readonly<{
	children: React.ReactNode
}>) {
	useEffect(() => {
		let targetScroll = window.scrollY // Start target scroll at current position
		let isAnimating = false // Flag to track if animation is in progress

		const smoothScroll = (event: { preventDefault: () => void; deltaY: number }) => {
			event.preventDefault()

			// Update target scroll position based on the scroll event
			targetScroll += event.deltaY // Adjust multiplier for desired scroll distance

			// Start animation if it's not already running
			if (!isAnimating) {
				isAnimating = true
				requestAnimationFrame(animateScroll)
			}
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

		// Add event listeners
		window.addEventListener("wheel", smoothScroll, { passive: false })

		return () => {
			// Cleanup event listeners on unmount
			window.removeEventListener("wheel", smoothScroll)
		}
	}, [])

	return (
		<>
			{children}
			<Footer />
		</>
	)
}
