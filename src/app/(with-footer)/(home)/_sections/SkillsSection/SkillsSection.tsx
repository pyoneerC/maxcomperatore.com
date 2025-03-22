"use client"

import { SetStateAction, useState, useRef, useEffect } from "react"
import { skills } from "~/data/skills"
import { SkillCard } from "~/components/SkillCard"
import styles from "./SkillsSection.module.css"
import { useTranslations } from "next-intl"
import gsap from 'gsap'; // Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export const SkillsSection = () => {
	const t = useTranslations("SkillsSection")
	const [currentTooltip, setCurrentTooltip] = useState("") // State to store the current tooltip

	// GSAP Refs
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const skillWrapperRef = useRef(null);
	const arrowwaveRef = useRef(null);
	const descriptionRef = useRef(null);

	const handleMouseEnter = (tooltip: SetStateAction<string>) => {
		setCurrentTooltip(tooltip)
	}

	const handleMouseLeave = () => {
		setCurrentTooltip("")
	}

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100", // Animation starts when the top of the section hits the center of the viewport
				// markers: true, // For debugging scroll trigger
			}
		});

		// @ts-ignore
		let x = skillWrapperRef.current.children;

		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }) // Fade in section
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6") // Title slide up and fade in
			.fromTo(x, { y: 30, opacity: 0, stagger: 0.1 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 }, "-=0.4") // Skill cards stagger slide up and fade in
			.fromTo(arrowwaveRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.5") // Arrowwave slide up and fade in
			.fromTo(descriptionRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4"); // Description slide up and fade in

	}, []);


	return (
		<section className="section-wrapper" ref={sectionRef}>
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
			<div className={styles.container} ref={arrowwaveRef}>
				<div className={styles.arrowwave}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<p className={styles.description} ref={descriptionRef}>
				{currentTooltip || t("defaultDescription")} {/* Default description if no skill is hovered */}
			</p>
		</section>
	)
}

export default SkillsSection