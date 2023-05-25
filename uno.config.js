/*
 USEFUL: Run Dev Server, Open this Link to show unocss DevTools
 * http://localhost:5173/__unocss
*/
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetRadix } from "unocss-preset-radix";

//* it supports most of the configuration you could have in the root config
function myPresetUno(options) {
  return {
    name: "my-preset-uno",
    rules: [
      /*
				NOTE: you can write custom class 
				[
					/^m-(\d)$/,
					([, d]) => ({ margin: `${d / 4}rem` }),
					{ layer: "utilities" },
					{ autocomplete: "m-<num>" },
				],
				* when you omit the layer, it will be `default`
				["btn", { padding: "4px" }],
				*/
    ],
    shortcuts: [
      /*
				NOTE: you can create utility classes
				{
					btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
				},
				* dynamic shortcuts
				[/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
				*/
    ],
    theme: {
      /*
				NOTE: you can create custom theme color pallete or breakpoints
				colors: {
					veryCool: "#0000ff", // class="text-very-cool"
					brand: {
						primary: "hsla(354, 100%, 80%, 90%)", // class="bg-brand-primary"
					},
				},
				breakpoints: {
					sm: "320px",
					md: "640px",
				},
				*/
    },
    variants: [
      /*
				NOTE: you can create variants like hover or focus
				* hover:
				(matcher) => {
					if (!matcher.startsWith("hover:")) return matcher;
					return {
						* slice `hover:` prefix and passed to the next variants and rules
						matcher: matcher.slice(6),
						selector: (s) => `${s}:hover`,
					};
				},
				*/
    ],
    preflights: [
      /*
				NOTE: you can create style, add layer to css file
				{
					layer: "my-layer",
					getCSS: async () => (await fetch("my-style.css")).text(),
				},
				{
					getCSS: ({ theme }) => `
						* {
							color: ${theme.colors.gray?.[700] ?? "#333"};
							padding: 0;
							margin: 0;
						}
					`,
				},
				*/
    ],
    layers: {
      /*
				NOTE: you can order layers
				components: -1,
				default: 1,
				utilities: 2,
				"my-layer": 3,
				*/
    },
    presets: [
      presetWebFonts({
        // provider: "google", // NOTE: default provider
        // fonts: {}, // NOTE: write google fonts
      }),
      presetRadix({
        palette: [
          "amber",
          "blue",
          "bronze",
          "brown",
          "crimson",
          "cyan",
          "gold",
          "grass",
          "gray",
          "green",
          "indigo",
          "lime",
          "mauve",
          "mint",
          "olive",
          "orange",
          "pink",
          "plum",
          "purple",
          "red",
          "sage",
          "sand",
          "sky",
          "slate",
          "teal",
          "tomato",
          "violet",
          "yellow",
        ],
        aliases: {
          primary: "red",
          base: "gray",
        },
      }),
    ],
    /*
			NOTE: you can add many class to safelist
				safelist: "p-1 p-2 p-3 p-4".split(" "),
			NOTE: you can add many class to blocklist
				blocklist: ["p-1", /^p-[2-4]$/],
			*/
  };
}

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTagify(),
    presetTypography(),
    presetIcons(),
    myPresetUno(),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerVariantGroup(),
    transformerDirectives(),
    transformerCompileClass(),
  ],
});
