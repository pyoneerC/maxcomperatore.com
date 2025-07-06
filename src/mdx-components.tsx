import type { MDXComponents } from "mdx/types"
import { Button } from "~/components/Ui/Button"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		Button,
	}
}
