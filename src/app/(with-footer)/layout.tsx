import { Footer } from "~/components/Footer";

export default function WithFooterLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
