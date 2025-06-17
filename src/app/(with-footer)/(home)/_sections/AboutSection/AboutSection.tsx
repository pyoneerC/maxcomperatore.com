"use client"

import React, { useEffect, useRef } from "react";
import styles from "./AboutSection.module.css";
import { useTranslations } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

export const AboutSection = () => {
	const t = useTranslations("AboutSection");

	// GSAP Refs
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const photoWrapperRef = useRef<HTMLDivElement>(null);
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

	// Function to add paragraph refs
	const addToParagraphRefs = (el: HTMLParagraphElement | null) => {
		if (el && !paragraphRefs.current.includes(el)) {
			paragraphRefs.current.push(el);
		}
		// Ensure refs are cleaned up properly
		paragraphRefs.current = paragraphRefs.current.filter(ref => ref && ref.isConnected);
	};

	// Cleanup GSAP animations
	const cleanupGSAP = () => {
		paragraphRefs.current = paragraphRefs.current.filter(ref => ref !== null);
	};

	// GSAP Animation Effect
	useEffect(() => {
		const ctx = gsap.context(() => {
			if (!sectionRef.current || !titleRef.current || !photoWrapperRef.current || !textWrapperRef.current) {
				console.warn("GSAP Aborted: One or more refs not available.");
				return;
			}

			let titleSplit: SplitText | null = null;
			const paragraphSplits: SplitText[] = [];

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top center+=100",
					end: "bottom center",
					toggleActions: "play none none reverse",
				},
			});

			tl.fromTo(sectionRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.8, ease: "power2.out" }
			);

			if (titleRef.current) {
				titleSplit = new SplitText(titleRef.current, { type: "chars" });
				tl.from(titleSplit.chars, {
					opacity: 0,
					yPercent: 100,
					stagger: 0.03,
					duration: 0.6,
					ease: "back.out(1.7)"
				}, "-=0.5");
			}

			tl.fromTo(photoWrapperRef.current,
				{ x: -60, opacity: 0, scale: 0.9, rotation: -8 },
				{ x: 0, opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "power3.out" },
				"-=0.6"
			);

			tl.fromTo(textWrapperRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: "power1.inOut" },
				"-=0.7"
			);

			paragraphRefs.current.forEach((paragraph) => {
				if (paragraph) {
					const paraSplit = new SplitText(paragraph, { type: "lines" });
					paragraphSplits.push(paraSplit);
					tl.from(paraSplit.lines, {
						opacity: 0,
						yPercent: 50,
						stagger: 0.1,
						duration: 0.7,
						ease: "power2.out",
					}, "-=0.3");
				}
			});

			return () => {
				if (titleSplit) titleSplit.revert();
				paragraphSplits.forEach(split => split.revert());
				tl.kill();
			};
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<section id="about" className={`section-wrapper ${styles.sectionWrapper}`} ref={sectionRef}>
			<h2 className={styles.title} ref={titleRef}>{t("title")}</h2>

			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper} ref={photoWrapperRef}>
					<img
						src="/assets/images/joaquin_olivero.avif"
						alt="Joaquín Olivero"
						className={styles.photo}
						loading="lazy"
						width={300}
						height={300}
					/>
				</div>
				<div className={styles.textWrapper} ref={textWrapperRef}>
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
				</div>
			</div>
		</section>
	);
};

export default AboutSection;