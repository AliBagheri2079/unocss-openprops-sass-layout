/** @type {import('postcss-load-config').Config} */

const config = {
  syntax: "postcss-scss",
  plugins: {
    "@unocss/postcss": {
      // Optional
      content: ["src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
    },
    "postcss-preset-env": {
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-selectors": { preserve: true },
      },
    },
    ...(process.env.NODE_ENV === "production"
      ? {
          autoprefixer: {},
          cssnano: { preset: "default" },
        }
      : {}),
  },
};

export default config;
