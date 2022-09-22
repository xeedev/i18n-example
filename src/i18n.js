import { createI18n } from "vue-i18n";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
// localStorage.setItem("locale", "en");
import en from "./locales/en.json";
import ja from "./locales/ja.json";
export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: "ja",
  fallbackLocale: "en",
  messages: {
    en,
    ja,
  },
});
