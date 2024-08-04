import type { MDXComponents } from "mdx/types";
import { ArticleHeader } from "~/components/ArticleHeader";
import { Button } from "~/components/Ui/Button";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		ArticleHeader,
		Button,
	};
}
