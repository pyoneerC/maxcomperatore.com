import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { SvgMasks } from "~/components/Svg/SvgMasks";
import { Header } from "~/components/Header";
import "~/styles/reset.css";
import "~/styles/globals.css";
import "~/styles/utils.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata = {
	metadataBase: new URL("https://maxcomperatore.com"),
	title: "Max Comperatore / Mid-Level Fullstack Web Developer (Backend-leaning) – Python, React, FastAPI, Node.js, PostgreSQL / Remote LATAM (Argentina)",
	description:
		"Max Comperatore is a top-tier AI and backend developer specialized in artificial intelligence, machine learning, and scalable backend systems. Delivering cutting-edge solutions for startups and enterprises worldwide.",
	authors: [{ name: "Max Comperatore" }],
	creator: "Max Comperatore",
	openGraph: {
		type: "website",
		url: "https://maxcomperatore.com",
		title: "Max Comperatore / Mid-Level Fullstack Web Developer (Backend-leaning) – Python, React, FastAPI, Node.js, PostgreSQL / Remote LATAM (Argentina)",
		description:
			"Max Comperatore is a top-tier AI and backend developer specialized in artificial intelligence, machine learning, and scalable backend systems. Delivering cutting-edge solutions for startups and enterprises worldwide.",
		images: [
			{
				url: "https://maxcomperatore.com/assets/images/socialpreview.webp",
				width: 1200,
				height: 630,
				alt: "Max Comperatore - AI & Backend Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@pyoneerC",
		creator: "@pyoneerC",
		title: "Max Comperatore / Mid-Level Fullstack Web Developer (Backend-leaning) – Python, React, FastAPI, Node.js, PostgreSQL / Remote LATAM (Argentina)",
		description:
			"Max Comperatore is a top-tier AI and backend developer specialized in artificial intelligence, machine learning, and scalable backend systems. Delivering cutting-edge solutions for startups and enterprises worldwide.",
		images: ["https://maxcomperatore.com/assets/images/socialpreview.webp"],
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
		name: "Maximo Comperatore",
		jobTitle: "AI & Backend Developer",
		url: "https://maxcomperatore.com",
		image: "https://maxcomperatore.com/assets/images/maximo_comperatore.avif",
		sameAs: [
			"https://www.linkedin.com/in/maxcomperatore/",
			"https://github.com/maxcomperatore",
			"https://www.youtube.com/channel/UCgZDAjllREu-3YeU-961EBg",
		],
		worksFor: {
			"@type": "Organization",
			name: "Max Comperatore",
			url: "https://maxcomperatore.com",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Mendoza",
			addressRegion: "Argentina",
			addressCountry: "AR",
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "University of Mendoza",
			sameAs: "https://um.edu.ar/",
		},
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Work",
			email: "mailto:me@maxcomperatore.com",
			url: "https://maxcomperatore.com",
			availableLanguage: ["Spanish", "English"],
			areaServed: "Global",
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "18:00",
				timeZone: "America/Argentina/Mendoza",
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
			name: "AI & Backend Developer",
			description:
				"Specialized in artificial intelligence, machine learning, and backend development. Building scalable and innovative solutions for complex problems.",
			occupationalCategory: "15-1132.00",
		},
		knowsAbout: [
			"Artificial Intelligence",
			"Machine Learning",
			"Backend Development",
			"Python",
			"C#",
			"C++",
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
				content="Max Comperatore is a leading AI and backend developer specialized in artificial intelligence, machine learning, and scalable backend systems. Offering cutting-edge solutions for startups and enterprises worldwide."
			/>
			<meta name="author" content="Max Comperatore" />
			<meta name="creator" content="Max Comperatore" />
			<meta
				property="og:image"
				content="https://maxcomperatore.com/assets/images/socialpreview.webp"
			/>

			<link rel="icon" href="/favicon.ico" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://maxcomperatore.com/" />
			<meta
				property="og:title"
				content="Max Comperatore / Mid-Level Fullstack Web Developer (Backend-leaning) – Python, React, FastAPI, Node.js, PostgreSQL / Remote LATAM (Argentina)"
			/>
			<meta
				property="og:description"
				content="Max Comperatore is a leading AI and backend developer specialized in artificial intelligence, machine learning, and scalable backend systems. Offering cutting-edge solutions for startups and enterprises worldwide."
			/>
			<meta
				property="og:image"
				content="https://maxcomperatore.com/assets/images/socialpreview.webp"
				style={{ width: 1200, height: 630 }}
			/>

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:title"
				content="Max Comperatore / Mid-Level Fullstack Web Developer (Backend-leaning) – Python, React, FastAPI, Node.js, PostgreSQL / Remote LATAM (Argentina)"
			/>
			<meta
				property="twitter:description"
				content="Max Comperatore is a leading AI and backend developer specialized in artificial intelligence, machine learning, and scalable backend systems. Offering cutting-edge solutions for startups and enterprises worldwide."
			/>
			<meta
				property="twitter:image"
				content="https://maxcomperatore.com/assets/images/socialpreview.webp"
				style={{ width: 1200, height: 630 }}
			/>
			<meta property="twitter:creator" content="@pyoneerC" />
			<meta property="twitter:site" content="@pyoneerC" />

			<link rel="canonical" href="https://maxcomperatore.com" />
			<meta name="robots" content="index, follow" />
			<link rel="alternate" hrefLang="en" href="https://maxcomperatore.com/" />
			<meta
				name="keywords"
				content="AI developer, artificial intelligence, machine learning, backend development, Max Comperatore, software developer, Python developer, C# developer, scalable systems, cloud computing, data engineering, APIs, microservices, DevOps, AI frameworks, innovative software solutions"
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