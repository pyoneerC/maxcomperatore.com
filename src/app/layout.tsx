import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { SvgMasks } from "~/components/Svg/SvgMasks"
import { Header } from "~/components/Header"
import "~/styles/reset.css"
import "~/styles/globals.css"
import "~/styles/utils.css"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
export const metadata = {
	metadataBase: new URL("https://maxcomperatore.com"),
	title: "Max Comperatore - Desarrollador de Software",
	description: "Un desarrollador pragmático enfocado en el desarollo de software, especializado en backend y desarrollo de videojuegos.",
	authors: [{ name: "Max Comperatore" }],
	creator: "Max Comperatore",
}
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const messages = await getMessages();
	const canonicalUrl = "https://maxcomperatore.com";

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Maximo Comperatore",
		jobTitle: "Backend & Game Developer",
		url: "https://maxcomperatore.com",
		image: "https://maxcomperatore.com/assets/images/maximo_comperatore.avif",
		sameAs: [
			"https://www.linkedin.com/in/maxcomperatore/",
			"https://github.com/maxcomperatore",
			"https://www.youtube.com/channel/UCgZDAjllREu-3YeU-961EBg",
			"https://pyoneerc1.itch.io/"
		],
		worksFor: {
			"@type": "Organization",
			name: "Max Comperatore",
			url: "https://maxcomperatore.com"
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Mendoza",
			addressRegion: "Argentina",
			addressCountry: "AR"
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "University of Mendoza",
			sameAs: "https://um.edu.ar/"
		},
		contactPoint: {
			"@type": "ContactPoint",
			contactType: "Work",
			email: "mailto:maxcomperatore@gmail.com",
			url: "https://maxcomperatore.com",
			availableLanguage: ["Spanish", "English"],
			areaServed: "Global",
			hoursAvailable: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday"
				],
				opens: "09:00",
				closes: "18:00",
				timeZone: "America/Argentina/Mendoza"
			}
		},
		knowsLanguage: [
			{
				"@type": "Language",
				name: "Spanish",
				alternateName: "es"
			},
			{
				"@type": "Language",
				name: "English",
				alternateName: "en"
			}
		],
		hasOccupation: {
			"@type": "Occupation",
			name: "Software Developer",
			description: "Specializing in backend development and game development.",
			occupationalCategory: "15-1132.00",
			}
		}

	return (
		<html lang="es" suppressHydrationWarning>
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{metadata.title}</title>
			<meta name="description"
						content="Descubre soluciones avanzadas en backend y desarrollo de videojuegos con Max Comperatore. Especializado en transformar ideas complejas en soluciones eficaces, utilizo Python, C#, y C++ para diseñar y optimizar proyectos innovadores." />
			<meta name="author" content="Max Comperatore" />
			<meta name="creator" content="Max Comperatore" />
			<meta property="og:image"
						content="https://maxcomperatore.com/assets/images/socialpreview.webp" />

			<link rel="canonical" href={canonicalUrl} />
			<link rel="icon" href="/favicon.ico" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://maxcomperatore.com/" />
			<meta property="og:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
			<meta property="og:description"
						content="Descubre soluciones avanzadas en backend y desarrollo de videojuegos con Max Comperatore. Especializado en transformar ideas complejas en soluciones eficaces, utilizo Python, C#, y C++ para diseñar y optimizar proyectos innovadores." />
			<meta property="og:image"
						content="https://maxcomperatore.com/assets/images/socialpreview.webp"
						style={{ width: 1200, height: 630 }} />
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
			<meta property="twitter:description"
						content="Descubre soluciones avanzadas en backend y desarrollo de videojuegos con Max Comperatore. Especializado en transformar ideas complejas en soluciones eficaces, utilizo Python, C#, y C++ para diseñar y optimizar proyectos innovadores." />
			<meta property="twitter:image"
						content="https://maxcomperatore.com/assets/images/socialpreview.webp"
						style={{ width: 1200, height: 630 }} />
			<meta property="og:url" content="https://maxcomperatore.com/" />
			<meta property="og:title" content="Max Comperatore - Desarrollador Backend y de Videojuegos" />
			<meta property="og:description"
						content="Descubre soluciones avanzadas en backend y desarrollo de videojuegos con Max Comperatore. Especializado en transformar ideas complejas en soluciones eficaces, utilizo Python, C#, y C++ para diseñar y optimizar proyectos innovadores." />
			<meta property="og:image"
						content="https://maxcomperatore.com/assets/images/socialpreview.webp"
						style={{ width: 1200, height: 630 }} />
			<meta property="twitter:creator" content="@pyoneerC" />
			<meta property="twitter:site" content="@pyoneerC" />

			<script async src="https://www.googletagmanager.com/gtag/js?id=G-N5ZZD243ZP"></script>
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
	)
}