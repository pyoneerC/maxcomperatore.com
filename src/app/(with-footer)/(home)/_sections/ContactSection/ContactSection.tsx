"use client"

import clsx from "clsx"
import styles from "./ContactSection.module.css"
import { useTranslations } from "next-intl"
import { Button } from "~/components/Ui/Button"
import { ContactDialog } from "~/components/ContactDialog"
import { useEffect, useRef } from "react"; // Import useRef and useEffect
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

	const d = useTranslations("testim");
	const testimonials = [
		{ id: 1, text: d("a") },
		{ id: 2, text: d("b") },
		{ id: 3, text: d("c") },
	];

	// GSAP Ref for testimonials container
	const testimonialsRef = useRef(null);
	const testimonialRefs = useRef([]); // Ref to hold multiple testimonials

	// Function to add testimonial refs
	const addToTestimonialRefs = (el: any) => {
		// @ts-ignore
		if (el && !testimonialRefs.current.includes(el)) {
			// @ts-ignore
			testimonialRefs.current.push(el);
		}
	};

	useEffect(() => {
		gsap.fromTo(
			testimonialRefs.current,
			{
				opacity: 0,
				yPercent: 20,
			},
			{
				opacity: 1,
				yPercent: 0,
				duration: 1,
				ease: "power2.out",
				stagger: 0.2,
				scrollTrigger: {
					trigger: testimonialsRef.current,
					start: "top 80%",
					end: "bottom center",
					// markers: true,
					toggleActions: 'play none none reverse',
				},
			}
		)
	}, []);


	return (
		<div className={styles.testimonials} ref={testimonialsRef}>
			{testimonials.map(({ id, text }) => (
				<blockquote key={id} className={styles.testimonial} ref={addToTestimonialRefs}>
					<p>"{text}"</p>
				</blockquote>
			))}
		</div>
	);
};

export const ContactSection = () => {
	const t = useTranslations("ContactSection");

	// GSAP Refs for ContactSection
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const contactDialogContainerRef = useRef(null);
	const arrow1Ref = useRef(null);
	const mobilearrowRef = useRef(null);
	const arrow2Ref = useRef(null);


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
			.fromTo(contactDialogContainerRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.4")
			.fromTo(arrow1Ref.current, { xPercent: -20, opacity: 0, rotation: 30 }, { xPercent: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
			.fromTo(mobilearrowRef.current, { yPercent: 20, opacity: 0, rotation: -30 }, { yPercent: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }, "-=0.7")
			.fromTo(arrow2Ref.current, { xPercent: 20, opacity: 0, rotation: -30 }, { xPercent: 0, opacity: 1, rotation: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");

	}, []);


	return (
		<section className={clsx("section-wrapper", styles.section)} ref={sectionRef}>
			<Testimonials />

			<h1 className={styles.title} ref={titleRef}>
				{t("question")}
			</h1>

			<div className={styles.contactDialogContainer} ref={contactDialogContainerRef}>
				<svg className={styles.arrow1} width="70" height="119" viewBox="0 0 70 119" fill="none"
						 xmlns="http://www.w3.org/2000/svg" ref={arrow1Ref}>
					<path fillRule="evenodd" clipRule="evenodd"
								d="M3.30831 0.175452C2.22988 0.879234 2.0658 3.29554 1.92513 20.8666C1.71413 44.068 1.38591 55.8446 0.51848 70.2486C-0.0676246 79.9139 -0.161424 85.6849 0.260571 87.937C1.40934 94.2241 4.94941 96.4293 14.9132 97.0862C24.8301 97.743 29.7768 97.9073 39.9047 97.9073C45.9767 97.9307 52.4239 97.8369 54.276 97.7196L57.6285 97.5319L55.8936 99.7605C53.8071 102.411 52.7755 104.101 51.3923 107.01C49.7747 110.458 48.5556 115.22 48.7431 117.449C48.8604 119.021 49.4934 118.645 51.7674 115.619C54.2525 112.288 58.8241 107.291 64.4039 101.802C67.7798 98.4937 68.6941 97.4381 69.2334 96.312C70.6166 93.403 70.1008 91.2213 67.6626 89.5557C66.2325 88.5704 60.7934 86.8813 56.9252 86.2245C54.3463 85.7787 50.0794 85.7318 48.5556 86.1072C47.2661 86.4356 46.2346 87.4209 46.0236 88.547C45.6954 90.2126 46.9145 91.8547 49.6575 93.4969L50.689 94.1068L44.3591 93.9661C34.1609 93.7315 27.9716 93.3796 16.695 92.4177C15.1476 92.277 12.9439 91.9955 11.7717 91.7844C5.91064 90.7521 5.23074 89.7199 5.27763 81.861C5.30107 79.3509 5.48864 73.8614 5.6762 69.6621C6.56708 51.0588 6.30919 17.1366 5.20731 3.90549C5.09009 2.61522 5.11352 2.3337 5.39485 2.3337C6.19195 2.3337 6.00441 0.973071 5.11353 0.292749C4.69154 -0.0356822 3.70686 -0.10606 3.30831 0.175452ZM59.715 92.3239C62.3642 93.0511 62.3876 93.0746 62.036 93.4969C61.4968 94.1537 60.1136 93.8957 58.4021 92.7696C57.5112 92.2066 56.9486 91.714 57.1362 91.714C57.3237 91.714 58.4959 91.9955 59.715 92.3239Z"
								fill="currentColor" />
				</svg>
				<svg className={styles.mobilearrow} width="91" height="195" viewBox="0 0 91 195" fill="none" xmlns="http://www.w3.org/2000/svg" ref={mobilearrowRef}>
					<path fillRule="evenodd" clipRule="evenodd"
								d="M83.8275 2.83924C71.2259 10.0664 63.6462 14.9471 55.0809 21.3765C41.8223 31.3725 31.6613 40.3126 29.0565 44.3251C27.6954 46.4604 27.32 47.7744 27.4373 50.074C27.5546 52.4439 28.2821 53.9222 30.2533 55.729C33.8671 59.061 40.4143 61.2901 54.4943 63.9417C58.9764 64.7864 60.9476 65.42 60.9476 65.9831C60.9476 66.5463 58.6948 69.3151 56.6767 71.2392C54.0719 73.75 51.1855 76.0261 45.6239 79.9916C37.6687 85.6466 34.313 88.5797 31.3797 92.4984C29.2442 95.2907 28.2352 97.5433 28.1413 99.6551C28.0005 102.377 28.7983 104.067 30.8869 105.381C33.1397 106.812 34.2895 107 42.761 107.328C52.6873 107.704 53.0628 107.844 51.115 110.543C50.6223 111.247 47.9471 113.992 45.178 116.667C40.2501 121.407 38.0677 123.777 35.6037 127.062C33.7263 129.573 29.9248 135.439 26.5221 141.024C18.4027 154.399 16.5957 158.575 12.2309 173.804C11.48 176.432 10.7995 178.567 10.7056 178.567C10.424 178.567 10.0486 177.324 9.79044 175.447C9.3915 172.725 7.98349 167.375 7.30295 165.967C6.62242 164.535 5.87149 163.878 4.6043 163.55C2.72697 163.034 0.708845 164.23 0.145647 166.154C-0.112485 166.952 -0.0420511 167.75 0.474214 171.364C0.826212 173.71 1.20167 176.948 1.34247 178.567C1.92913 186.146 2.0934 187.648 2.39846 189.244C2.77393 191.285 3.36058 192.482 4.44004 193.514C6.05924 195.063 8.28857 195.415 10.3771 194.43C11.0342 194.148 12.536 192.975 13.7563 191.848C16.8773 188.986 20.3035 186.452 34.4303 176.573C43.066 170.542 45.9055 168.477 46.3983 167.914C46.7268 167.492 46.5156 167.07 46.0228 167.07C45.53 167.07 33.5386 171.786 29.6197 173.522C27.9301 174.273 25.0906 175.611 23.2837 176.549C21.4768 177.465 19.928 178.239 19.8341 178.286C19.7403 178.333 19.7637 178.075 19.8576 177.699C24.5509 162.94 26.0293 159.608 33.6324 146.726C41.8223 132.858 43.9812 129.807 50.7396 122.721C55.034 118.192 56.9348 115.775 58.1081 113.359C58.8121 111.857 58.9529 111.294 59.0233 109.534C59.1172 107.586 59.0937 107.375 58.3897 105.944C57.1694 103.456 54.9636 101.931 51.6314 101.251C50.7631 101.086 48.041 100.805 45.577 100.664C41.0949 100.406 37.2463 100.054 36.4954 99.8194C35.9557 99.6551 36.1669 99.2562 38.0677 96.7924C40.4613 93.7185 43.1364 91.3251 50.0356 86.1159C55.2687 82.1738 58.0612 79.8273 60.666 77.1993C67.0489 70.7465 68.9497 65.6546 66.2041 62.4399C64.5379 60.5158 62.778 59.8353 55.1983 58.2866C43.77 55.9636 37.7391 53.8753 34.9701 51.3176C33.304 49.7924 33.6325 48.713 36.7535 45.4044C44.6852 37.004 59.9855 24.4504 75.6142 13.4923C85.6814 6.42936 89.4595 3.47279 90.14 1.99451C90.5155 1.22017 90.5154 1.10285 90.1869 0.563162C89.9522 0.234654 89.5768 0 89.2717 0C88.9901 0 86.5496 1.29056 83.8275 2.83924Z"
								fill="currentColor" />
				</svg>
				<ContactDialog
					trigger={
						<Button className={styles.actionBtn} type="button">
							{t("contact")}
						</Button>
					}
				/>
				<svg className={styles.arrow2} width="77" height="139" viewBox="0 0 77 139" fill="none"
						 xmlns="http://www.w3.org/2000/svg" ref={arrow2Ref}>
					<path fillRule="evenodd" clipRule="evenodd"
								d="M63.9153 0.37541C62.6706 1.85361 63.1403 31.3942 64.7373 54.4353C65.5593 65.9325 67.0389 77.8285 68.8708 87.6362C71.0784 99.4618 71.3837 102.113 70.7496 103.99C70.1155 105.914 68.6594 106.384 61.9191 106.876C51.2566 107.674 49.3543 108.003 32.6561 112.038C25.9157 113.681 18.8936 115.112 18.7057 114.924C18.6352 114.877 19.1754 113.939 19.8799 112.859C21.3126 110.63 21.5944 109.692 21.1951 108.401C20.6784 106.642 18.5882 105.656 16.8973 106.36C16.451 106.548 14.807 107.604 13.257 108.683C10.5797 110.56 9.0531 111.405 4.54388 113.47C-0.435059 115.745 -1.37449 119.734 1.98395 124.404C3.48702 126.515 4.9901 127.829 8.65384 130.246C12.8578 132.991 16.2397 134.61 20.561 135.971C22.4868 136.581 24.9293 137.426 25.9627 137.872C27.137 138.364 27.9355 138.575 28.0764 138.435C28.9219 137.59 24.718 133.249 18.3534 128.51C15.8404 126.633 13.4684 124.826 13.0691 124.521L12.3646 123.934L13.304 123.77C19.8565 122.667 28.1468 120.861 35.8736 118.819C45.1269 116.379 51.2566 115.018 55.8128 114.385C64.2441 113.211 68.0018 112.578 69.4579 112.132C72.558 111.17 74.977 108.824 75.8929 105.867C76.8559 102.77 76.5505 99.1568 74.2959 87.2842C71.5951 73.0888 70.1155 61.1928 68.5185 41.1785C67.5086 28.5551 66.3813 11.6614 66.1465 5.04465C65.9821 0.750832 65.7707 0 64.7608 0C64.4555 0 64.0797 0.164239 63.9153 0.37541Z"
								fill="currentColor" />
				</svg>
			</div>
		</section>
	);
};