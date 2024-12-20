// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import remarkHeadingID from 'remark-heading-id';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkHeadingID],
  },
});
