"use client";

import { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { ProjectCard } from "~/components/ProjectCard";
import { coverProjects } from "~/data/projects";

import styles from "./ProjectsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
	const t = useTranslations("ProjectsSection");
	const [IsPC, setIsPC] = useState(false);
	const pc = t("pc");
	const mobile = t("mobile");

	// GSAP Refs
	const sectionRef = useRef<HTMLElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const subtitleRef = useRef<HTMLParagraphElement | null>(null);
	const projectsWrapperRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const detectDevice = () => {
			const isMobileDevice = "ontouchstart" in window || window.innerWidth < 768;
			setIsPC(!isMobileDevice);
		};

		detectDevice();

		window.addEventListener("resize", detectDevice);

		return () => window.removeEventListener("resize", detectDevice);
	}, []);

	useEffect(() => {
		if (
			!sectionRef.current ||
			!titleRef.current ||
			!subtitleRef.current ||
			!projectsWrapperRef.current
		) {
			console.warn("GSAP Aborted: One or more refs not available.");
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100",
				// markers: true,
			},
		});

		// @ts-ignore
		const x = projectsWrapperRef.current.children;

		// @ts-ignore
		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
			.fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
			.fromTo(x,
				{ y: 30, opacity: 0, stagger: 0.1 },
				{ y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 },
				"-=0.3");

		return () => {
			tl.kill();
		};
	}, [t]);

	// @ts-ignore
	return (
		<section id="projects" className="section-wrapper" ref={sectionRef}>
			<h2 className={styles.title} ref={titleRef}>
				{t("title")}
			</h2>
			<p className={styles.subtitle} ref={subtitleRef}>
				{IsPC ? pc : mobile}
			</p>
			<div className={styles.projectsWrapper} ref={projectsWrapperRef}>
				{coverProjects.map(({ i18nDescriptionKey, ...projects }) => (
					<ProjectCard
						key={projects.name}
						description={t(i18nDescriptionKey ?? "")}
						{...projects}
					/>
				))}
			</div>
		</section>
	);
};