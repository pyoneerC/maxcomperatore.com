import createMDX from '@next/mdx'
import rehypeShiki from '@shikijs/rehype'
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypeShiki, {
      themes: {
        light: "catppuccin-latte",
        dark: "github-dark",
      }
    }]],
  },
})

const withNextIntl = createNextIntlPlugin(
  './src/i18n.ts'
);

export default withMDX(withNextIntl(nextConfig))