"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useTranslations } from "next-intl";

import styles from "./AboutSection.module.css";
gsap.registerPlugin(ScrollTrigger, SplitText);

export const AboutSection = () => {
	const t = useTranslations("AboutSection");
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const photoWrapperRef = useRef<HTMLDivElement>(null);
	const textWrapperRef = useRef<HTMLDivElement>(null);
	const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

	const addToParagraphRefs = (el: HTMLParagraphElement | null) => {
		if (el && !paragraphRefs.current.includes(el)) {
			paragraphRefs.current.push(el);
		}
		paragraphRefs.current = paragraphRefs.current.filter(ref => ref && ref.isConnected);
	};

	useEffect(() => {
		const ctx = gsap.context(() => {
			if (!sectionRef.current || !titleRef.current || !photoWrapperRef.current || !textWrapperRef.current) return;

			let titleSplit: SplitText | null = null;
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
					tl.from(paragraph, {
						opacity: 0,
						y: 30,
						duration: 0.7,
						ease: "power2.out",
					}, "-=0.3");
				}
			});

			return () => {
				if (titleSplit && titleRef.current && titleRef.current.isConnected) {
					titleSplit.revert();
				}
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