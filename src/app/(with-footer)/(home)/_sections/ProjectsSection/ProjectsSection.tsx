"use client"

import { coverProjects } from "~/data/projects"
import { ProjectCard } from "~/components/ProjectCard";
import styles from "./ProjectsSection.module.css";
import { useTranslations } from "next-intl";
import { useEffect, useState, useRef } from "react"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
	const t = useTranslations("ProjectsSection");
	const [IsPC, setIsPC] = useState(false);
	const pc = t("pc");
	const mobile = t("mobile");

	// GSAP Refs
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const projectsWrapperRef = useRef(null);
	const seemoreLinkRef = useRef(null);

	useEffect(() => {
		const detectDevice = () => {
			const isMobileDevice = 'ontouchstart' in window || window.innerWidth < 768;
			setIsPC(!isMobileDevice);
		};

		detectDevice();

		window.addEventListener('resize', detectDevice);

		return () => window.removeEventListener('resize', detectDevice);
	}, []);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100",
				// markers: true,
			},
		});

		// @ts-ignore
		let x = projectsWrapperRef.current.children;

		// @ts-ignore
		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
			.fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.4")
			.fromTo(x,
				{ y: 30, opacity: 0, stagger: 0.1 },
				{ y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 },
				"-=0.3");

	}, []);

	// @ts-ignore
	return (
		<section className="section-wrapper" ref={sectionRef}>
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
						description={t(i18nDescriptionKey)}
						{...projects}
					/>
				))}
				<div className={"styles.button-wrapper"} ref={seemoreLinkRef}>
					<a href="/iniciativas" className={styles.link}>
						{t("seemore")}
						<div className={styles.icon}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
									 className="icon icon-tabler icons-tabler-outline icon-tabler-code-plus">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M9 12h6" />
								<path d="M12 9v6" />
								<path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
								<path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
							</svg>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};