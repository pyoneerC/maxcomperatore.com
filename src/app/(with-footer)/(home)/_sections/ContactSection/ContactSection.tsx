"use client";

import { useEffect, useRef } from "react";
 
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

import { ContactDialog } from "~/components/ContactDialog";
import { Button } from "~/components/Ui/Button";

import styles from "./ContactSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
	const t = useTranslations("ContactSection");
	const sectionRef = useRef<HTMLElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const contactDialogContainerRef = useRef<HTMLDivElement | null>(null);
	const arrow1Ref = useRef<SVGSVGElement | null>(null);
	const mobilearrowRef = useRef<SVGSVGElement | null>(null);
	const arrow2Ref = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (
			!sectionRef.current ||
			!titleRef.current ||
			!contactDialogContainerRef.current ||
			!arrow1Ref.current ||
			!mobilearrowRef.current ||
			!arrow2Ref.current
		) {
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top center+=100",
			},
		});

		tl.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" })
			.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.6")
			.fromTo(contactDialogContainerRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.4")
			.fromTo(arrow1Ref.current, { xPercent: -20, opacity: 0, rotation: 30 }, { xPercent: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
			.fromTo(mobilearrowRef.current, { yPercent: 20, opacity: 0, rotation: -30 }, { yPercent: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }, "-=0.7")
			.fromTo(arrow2Ref.current, { xPercent: 20, opacity: 0, rotation: -30 }, { xPercent: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");

		return () => {
			tl.kill();
		};
	}, [t]);

	return (
		<section className={clsx("section-wrapper", styles.section)} ref={sectionRef} style={{ opacity: 1, minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

			<h1 className={styles.title} ref={titleRef} style={{ opacity: 1 }}>
				{t("question")}
			</h1>

			<div className={styles.contactDialogContainer} ref={contactDialogContainerRef} style={{ opacity: 1 }}>
				<ContactDialog
					trigger={
						<Button className={styles.actionBtn} type="button">
							{t("contact")}
						</Button>
					}
				/>
			</div>
		</section>
	);
};