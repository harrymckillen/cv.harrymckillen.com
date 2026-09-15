// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
// @ts-ignore
import remarkHeadingID from 'remark-heading-id';

export default defineConfig({
  markdown: {
    processor: unified({
      remarkPlugins: [remarkHeadingID],
    }),
  },
});
