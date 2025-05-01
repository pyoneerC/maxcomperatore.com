"use client"

import React, { useEffect, useRef } from "react";
import styles from "./AboutSection.module.css";
import { useTranslations } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import { Experience } from "~/components/Experience";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
	const t = useTranslations("AboutSection");

	// GSAP Refs
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const photoWrapperRef = useRef(null);
	const textWrapperRef = useRef(null);
	const paragraphRefs = useRef([]); // Ref to hold multiple paragraphs
	const experienceWrapperRef = useRef(null);

	// Function to add paragraph refs
	const addToParagraphRefs = (el: any) => {
		// @ts-ignore
		if (el && !paragraphRefs.current.includes(el)) {
			// @ts-ignore
			paragraphRefs.current.push(el);
		}
	};

	useEffect(() => {
		(async function () {
			const cal = await getCalApi({ namespace: "30min" });

			cal("floatingButton", {
				calLink: "maxcomperatore/30min",
				config: { layout: "month_view" },
				hideButtonIcon: false,
				buttonPosition: "bottom-left",
				buttonText: "Let's Talk"
			});

			// Wait for buttons to render
			setTimeout(() => {
				// Only apply on desktop
				if (window.innerWidth >= 768) {
					const allCalButtons = document.querySelectorAll("cal-floating-button");

					if (allCalButtons.length > 1) {
						// Remove duplicates
						for (let i = 1; i < allCalButtons.length; i++) {
							allCalButtons[i].remove();
						}
					}

					// Scale the remaining button
					const shadowHost = allCalButtons[0];
					if (shadowHost && shadowHost.shadowRoot) {
						const btn = shadowHost.shadowRoot.querySelector("button");
						if (btn) {
							btn.style.transform = "scale(1.25)";
							btn.style.transformOrigin = "bottom left";
						}
					}
				}
			}, 1000); // Delay to wait for rendering
		})();
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100",
				// markers: true,
			},
		});

		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
			.fromTo(photoWrapperRef.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: "power2.out" }, "-=0.5")
			.fromTo(textWrapperRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.7");

		// "Line Sweep" Text Unveiling for paragraphs
		paragraphRefs.current.forEach((paragraph, index) => {
			tl.fromTo(
				paragraph,
				{
					clipPath: 'polygon(0 0, 0 0, 0% 100%, 0 100%)', // Start with a zero-width line at the left
					opacity: 0, // Initially hidden
					yPercent: 5, // Subtle initial vertical offset
				},
				{
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Sweep to full width
					opacity: 1, // Fade in
					yPercent: 0,
					duration: 1.2, // Slightly longer duration for this effect
					ease: "power3.inOut", // Try a different easing - inOut for smoother start and end
					scrollTrigger: {
						trigger: paragraph, // Trigger each paragraph individually
						start: "top 85%", // Start a bit earlier
						end: "bottom center",
						scrub: true, // Keep scrub for interactivity
						// markers: true,
						toggleActions: 'play none none reverse',
					},
				},
				"-=0.4" // Slightly reduced stagger
			);
		});

		tl.fromTo(experienceWrapperRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });


	}, []);

	return (
		<section className="section-wrapper" ref={sectionRef}>
			<h2 className={styles.title} ref={titleRef}>{t("title")}</h2>

			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper} ref={photoWrapperRef}>
					<img
						src="/assets/images/maximo_comperatore.avif"
						alt="Maximo Comperatore"
						className={styles.photo}
						loading="lazy"
						width={300}
						height={300}
						style={{
							objectFit: "cover",
						}}
					/>
				</div>
				<div className={styles.textWrapper} ref={textWrapperRef}>
					<p className={styles.paragraph} ref={addToParagraphRefs} style={{ clipPath: 'polygon(0 0, 0 0, 0% 100%, 0 100%)', opacity: 0 }}> {/* Initial clipping and opacity style */}
						{t.rich("d0", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
					<p className={styles.paragraph} ref={addToParagraphRefs} style={{ clipPath: 'polygon(0 0, 0 0, 0% 100%, 0 100%)', opacity: 0 }}> {/* Initial clipping and opacity style */}
						{t.rich("d1", {
							strong: (children) => <strong>{children}</strong>,
						})}
					</p>
					<p className={styles.paragraph} ref={addToParagraphRefs} style={{ clipPath: 'polygon(0 0, 0 0, 0% 100%, 0 100%)', opacity: 0 }}> {/* Initial clipping and opacity style */}
						{t.rich("d2", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
					<p className={styles.paragraph} ref={addToParagraphRefs} style={{ clipPath: 'polygon(0 0, 0 0, 0% 100%, 0 100%)', opacity: 0 }}> {/* Initial clipping and opacity style */}
						{t.rich("d3", {
							strong: (children) => <strong>{children}</strong>,
							em: (children) => <em>{children}</em>,
						})}
					</p>
				</div>
			</div>

			<div className={styles.experienceWrapper} ref={experienceWrapperRef}>
				<Experience />
			</div>
		</section>
	);
};

export default AboutSection;