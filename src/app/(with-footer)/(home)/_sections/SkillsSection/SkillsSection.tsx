"use client"

import { SetStateAction, useState, useRef, useEffect, FC } from "react"
import { skills } from "~/data/skills"
import { SkillCard } from "~/components/SkillCard"
import styles from "./SkillsSection.module.css"
import { useTranslations } from "next-intl"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection: FC = () => {
	const t = useTranslations("SkillsSection")
	const [currentTooltip, setCurrentTooltip] = useState<string>("")

	const sectionRef = useRef<HTMLElement>(null)
	const titleRef = useRef<HTMLHeadingElement>(null)
	const skillWrapperRef = useRef<HTMLDivElement>(null)
	const arrowwaveRef = useRef<HTMLDivElement>(null)
	const descriptionRef = useRef<HTMLParagraphElement>(null)

	const handleMouseEnter = (tooltip: SetStateAction<string>) => {
		setCurrentTooltip(tooltip)
	}

	const handleMouseLeave = () => {
		setCurrentTooltip("")
	}

	useEffect(() => {
		if (
			!sectionRef.current ||
			!titleRef.current ||
			!skillWrapperRef.current ||
			!arrowwaveRef.current ||
			!descriptionRef.current
		) {
			console.warn("GSAP Aborted: One or more refs not available.");
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100",
				// markers: true, // For debugging scroll trigger
			}
		});

		const skillChildren = skillWrapperRef.current.children;

		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
			.fromTo(skillChildren, { y: 30, opacity: 0, stagger: 0.1 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }, "-=0.4")
			.fromTo(arrowwaveRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
			.fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

		return () => {
			tl.kill();
		};
	}, []);

	return (
		<section id="tech" className="section-wrapper" ref={sectionRef}>
			<h2 className={styles.title} ref={titleRef}>
				{t("title")}
			</h2>
			<div className={styles.skillWrapper} ref={skillWrapperRef}>
				{skills.map((skill) => (
					<SkillCard
						key={skill.name}
						{...skill}
						onMouseEnter={() => handleMouseEnter(t(skill.name))}
						onMouseLeave={handleMouseLeave}
					/>
				))}
			</div>
			<div className={styles.container} ref={arrowwaveRef} aria-hidden="true">
				<div className={styles.arrowwave}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<p className={styles.description} ref={descriptionRef} aria-live="polite">
				{currentTooltip || t("defaultDescription")}
			</p>
		</section>
	)
}

export default SkillsSection