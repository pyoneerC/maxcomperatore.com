import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AboutSection } from "./_sections/AboutSection";
import { ContactSection } from "./_sections/ContactSection";
import { HeroSection } from "./_sections/HeroSection";
import { ProjectsSection } from "./_sections/ProjectsSection";
import { SkillsSection } from "./_sections/SkillsSection";


export default function Home() {
	return (
		<>
			<main>
				<Analytics />
				<SpeedInsights />
				<HeroSection />
				<ProjectsSection />
				<AboutSection />
				<SkillsSection />
				<ContactSection />
			</main>
		</>
	);
}