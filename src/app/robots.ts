import { HOST_URL } from "~/constants";

export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: ["/"],
			},
		],
		sitemap: `${HOST_URL}/sitemap.xml`,
		host: HOST_URL,
	};
}
