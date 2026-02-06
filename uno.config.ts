import {
  defineConfig,
  presetAttributify,
  presetWind4,
  PresetWind4Theme,
  transformerDirectives,
} from "unocss";

export default defineConfig<PresetWind4Theme>({
  presets: [
    presetWind4({
      dark: "media",
    }),
    presetAttributify({
      prefixedOnly: true,
    }),
  ],
  transformers: [transformerDirectives()],
  content: {
    filesystem: ["./**/*.css"],
  },
  theme: {
    font: {
      sans: "'Noto Sans JP', sans-serif",
    },
  },
});
