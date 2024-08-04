import { HeroSection } from "./_sections/HeroSection";
import { ProjectsSection } from "./_sections/ProjectsSection";
import { AboutSection } from "./_sections/AboutSection";
import { SkillsSection } from "./_sections/SkillsSection";
import { ContactSection } from "./_sections/ContactSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
