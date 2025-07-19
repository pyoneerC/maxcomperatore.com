import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import { Header } from "~/components/Header";
import { SvgMasks } from "~/components/Svg/SvgMasks";

import "~/styles/reset.css";
import "~/styles/globals.css";
import "~/styles/utils.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
	metadataBase: new URL("https://joacolivero.com"),
	title: "Joaquín Olivero / Backend Developer – Java, JavaScript, React, MongoDB, Node.js, PostgreSQL",
	description:
		"Joaquín Olivero is a backend developer specialized in scalable backend systems. Delivering cutting-edge solutions for startups and enterprises worldwide.",
	authors: [{ name: "Joaquín Olivero" }],
	creator: "Joaquín Olivero",
	openGraph: {
		type: "website",
		url: "https://joacolivero.com",
		title: "Joaquín Olivero / Backend Developer – Java, JavaScript, React, MongoDB, Node.js, PostgreSQL",
		description:
			"Joaquín Olivero is a backend developer specialized in scalable backend systems. Delivering cutting-edge solutions for startups and enterprises worldwide.",
		images: [
			{
				
			},
		],
	},
};

export default async function RootLayout({
																					 children,
																				 }: {
	children: React.ReactNode;
}) {
	const messages = await getMessages();

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Joaquín Olivero",
		jobTitle: "Backend Developer",
		url: "https://joacolivero.com",
		image: "",
		sameAs: [
			"https://www.linkedin.com/in/joaquinolivero/",
			"https://github.com/Pulpoide",
		],
		worksFor: {
			"@type": "Organization",
			name: "Joaquín Olivero",
			url: "https://joacolivero.com",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Córdoba",
			addressRegion: "Argentina",
			addressCountry: "AR",
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Aeronautical University Institute",
			sameAs: "https://www.iua.edu.ar/",
		},
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Work",
			email: "mailto:joacolivero.dev@gmail.com",
			url: "https://joacolivero.com",
			availableLanguage: ["Spanish", "English"],
			areaServed: "Global",
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "18:00",
				timeZone: "America/Argentina/Cordoba",
			},
		},
		knowsLanguage: [
			{
				"@type": "Language",
				name: "Spanish",
				alternateName: "es",
			},
			{
				"@type": "Language",
				name: "English",
				alternateName: "en",
			},
		],
		hasOccupation: {
			"@type": "Occupation",
			name: "Backend Developer",
			description:
				"Specialized in backend development. Building scalable and innovative solutions for complex problems.",
			occupationalCategory: "15-1132.00",
		},
		knowsAbout: [
			"Backend Development",
			"Cloud Computing",
			"Data Engineering",
			"APIs",
			"Microservices",
			"DevOps",
			"Scalable Systems",
		],
	};

	return (
		<html lang="es" suppressHydrationWarning>
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{metadata.title}</title>
			<meta
				name="description"
				content="Joaquín Olivero is a backend developer specialized in scalable backend systems. Delivering cutting-edge solutions for startups and enterprises worldwide."
			/>
			<meta name="author" content="Joaquín Olivero" />
			<meta name="creator" content="Joaquín Olivero" />
			

			<link rel="icon" href="/favicon.ico" />

			<link rel="canonical" href="https://joacolivero.com" />
			<link rel="alternate" hrefLang="en" href="https://joacolivero.com/" />
			<meta
				name="keywords"
				content="Backend development, Joaquín Olivero, software developer, scalable systems, cloud computing, data engineering, APIs, microservices, DevOps, innovative software solutions"
			/>

			{/* Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>

			{/* Google Analytics */}
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-N5ZZD243ZP"
			></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N5ZZD243ZP');
            `,
				}}
			/>

			{/* Microsoft Clarity */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
              (function(c, l, a, r, i, t, y) {
                  c[a] = c[a] || function() {
                      (c[a].q = c[a].q || []).push(arguments);
                  };
                  t = l.createElement(r);
                  t.async = 1;
                  t.src = "https://www.clarity.ms/tag/" + i;
                  y = l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "pvyy33bjq3");
            `,
				}}
			/>
			
			{/* PostHog */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetGroupPropertiesForFlags resetPersonPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_iBC0BVzfGshXaI0N304EjYvpnAk57rZ4CbV48r2gBeJ', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only'
      });
    `,
				}}
			/>
		</head>
		<body className={`${GeistSans.className} ${GeistSans.variable}`}>
		<NextIntlClientProvider messages={messages}>
			<ThemeProvider>
				<SvgMasks />
				<div className="__next">
					<Header />
					{children}
				</div>
			</ThemeProvider>
		</NextIntlClientProvider>
		</body>
		</html>
	);
}