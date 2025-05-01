"use client"

import React, { useEffect, useRef } from "react";
import styles from "./AboutSection.module.css";
import { useTranslations } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText'; // Import SplitText

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export const AboutSection = () => {
	const t = useTranslations("AboutSection");

	// GSAP Refs
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const photoWrapperRef = useRef<HTMLDivElement>(null);
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]); // Ref to hold multiple paragraphs

	// Function to add paragraph refs
	const addToParagraphRefs = (el: HTMLParagraphElement | null) => {
		if (el && !paragraphRefs.current.includes(el)) {
			paragraphRefs.current.push(el);
		}
	};

	// Cal.com Effect
	useEffect(() => {
		let calButtonInterval: NodeJS.Timeout | null = null;
		let attempts = 0;
		const maxAttempts = 10; // Try for 5 seconds (10 * 500ms)

		(async function () {
			try {
				const cal = await getCalApi({ namespace: "30min" });
				cal("floatingButton", {
					calLink: "maxcomperatore/30min",
					config: { layout: "month_view" },
					hideButtonIcon: false,
					buttonPosition: "bottom-left",
					buttonText: "Let's Talk"
				});

				// More robust button scaling logic
				const scaleButton = () => {
					if (window.innerWidth < 768) return; // Only apply on desktop

					const allCalButtons = document.querySelectorAll("cal-floating-button");

					if (allCalButtons.length > 0) {
						// Remove potential duplicates first
						if (allCalButtons.length > 1) {
							for (let i = 1; i < allCalButtons.length; i++) {
								allCalButtons[i].remove();
								console.log("Removed duplicate Cal.com button");
							}
						}

						// Scale the remaining button
						const shadowHost = allCalButtons[0];
						if (shadowHost?.shadowRoot) {
							const btn = shadowHost.shadowRoot.querySelector("button");
							if (btn) {
								console.log("Scaling Cal.com button");
								btn.style.transform = "scale(1.25)";
								btn.style.transformOrigin = "bottom left";
								if (calButtonInterval) clearInterval(calButtonInterval); // Stop polling once successful
								return; // Exit function
							}
						}
					}

					// If button not found or not ready, try again (up to maxAttempts)
					attempts++;
					if (attempts >= maxAttempts && calButtonInterval) {
						console.warn("Cal.com button not found or ready for scaling after multiple attempts.");
						clearInterval(calButtonInterval);
					}
				};

				// Poll for the button instead of fixed timeout
				calButtonInterval = setInterval(scaleButton, 500);

			} catch (error) {
				console.error("Failed to initialize Cal.com:", error);
				if (calButtonInterval) clearInterval(calButtonInterval);
			}
		})();

		// Cleanup interval on component unmount
		return () => {
			if (calButtonInterval) {
				clearInterval(calButtonInterval);
			}
			// Optional: Attempt to remove the button instance if namespace allows
			// getCalApi({ namespace: "30min" }).then(cal => cal("ui", {"hide":true})); // Example, check Cal.com docs
		};
	}, []);

	// GSAP Animation Effect
	useEffect(() => {
		const ctx = gsap.context(() => {
			// Ensure refs are current before animating
			if (!sectionRef.current || !titleRef.current || !photoWrapperRef.current || !textWrapperRef.current) {
				console.warn("GSAP Aborted: One or more refs not available.");
				return;
			}

			// SplitText Instances - store them for cleanup
			let titleSplit: SplitText | null = null;
			const paragraphSplits: SplitText[] = [];

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center+=100", // Start animation when the top of the section is 100px below the center
					end: "bottom center",    // Adjust end point if needed
					// markers: true, // Uncomment for debugging
					toggleActions: "play none none reverse", // Play on enter, reverse on leave back
				},
			});

			tl.fromTo(sectionRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.8, ease: "power2.out" }
			);

			// Title Animation (SplitText Chars)
			if (titleRef.current) {
				titleSplit = new SplitText(titleRef.current, { type: "chars" });
				tl.from(titleSplit.chars, {
					opacity: 0,
					yPercent: 100, // Start from below
					stagger: 0.03, // Faster stagger for title
					duration: 0.6,
					ease: "back.out(1.7)" // A bouncy ease
				}, "-=0.5"); // Overlap slightly with section fade
			}

			// Photo Animation (Fly in + Subtle rotation/scale)
			tl.fromTo(photoWrapperRef.current,
				{ x: -60, opacity: 0, scale: 0.9, rotation: -8 },
				{ x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "power3.out" },
				"-=0.6" // Overlap more
			);

			// Text Wrapper Fade In (Container for paragraphs)
			tl.fromTo(textWrapperRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: "power1.inOut" },
				"-=0.7" // Overlap significantly
			);

			// Paragraph Animation (SplitText Lines) - Staggered reveal
			paragraphRefs.current.forEach((paragraph) => {
				if (paragraph) {
					const paraSplit = new SplitText(paragraph, { type: "lines" });
					paragraphSplits.push(paraSplit); // Store for cleanup
					tl.from(paraSplit.lines, {
						opacity: 0,
						yPercent: 50,      // Start from slightly below
						stagger: 0.1,      // Time between each line animating in
						duration: 0.7,       // Duration for each line animation
						ease: "power2.out",
					}, "-=0.3"); // Start each paragraph's animation slightly after the previous one begins
				}
			});

			// Cleanup function
			return () => {
				console.log("GSAP Cleanup AboutSection");
				// Revert SplitText instances
				if (titleSplit) titleSplit.revert();
				paragraphSplits.forEach(split => split.revert());
				// Kill the timeline and its associated ScrollTrigger
				tl.kill();
				// If the ScrollTrigger was created outside the timeline, kill it separately
				// const st = ScrollTrigger.getById("aboutSectionTrigger"); // Assign an ID if needed
				// if (st) st.kill();
			};
		}, sectionRef); // Scope the context to the sectionRef

		return () => ctx.revert(); // Cleanup GSAP context on unmount

	}, []); // Empty dependency array ensures this runs once on mount

	return (
		// Add an ID for easier targeting if needed, though ref is usually sufficient
		<section id="about-section" className={`section-wrapper ${styles.sectionWrapper}`} ref={sectionRef}>
			<h2 className={styles.title} ref={titleRef}>{t("title")}</h2>

			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper} ref={photoWrapperRef}>
					<img
						src="/assets/images/maximo_comperatore.avif"
						alt="Maximo Comperatore"
						className={styles.photo}
						loading="lazy"
						width={300} // Specify intrinsic size for performance
						height={300}
						// style={{ objectFit: "cover" }} // Moved object-fit to CSS
					/>
				</div>
				<div className={styles.textWrapper} ref={textWrapperRef}>
					{/* No inline styles needed for GSAP animation here anymore */}
					<p className={styles.paragraph} ref={addToParagraphRefs}>
						{t.rich("d0", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
					<p className={styles.paragraph} ref={addToParagraphRefs}>
						{t.rich("d1", {
							strong: (children) => <strong>{children}</strong>,
						})}
					</p>
					<p className={styles.paragraph} ref={addToParagraphRefs}>
						{t.rich("d2", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
					<p className={styles.paragraph} ref={addToParagraphRefs}>
						{t.rich("d3", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;