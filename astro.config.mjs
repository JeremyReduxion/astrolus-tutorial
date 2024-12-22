// @ts-check
import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    site: "https://reduxion.com.my/pro/astrotutorial/",
    integrations: [relativeLinks(), preact()]
});