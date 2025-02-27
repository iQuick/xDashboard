import { createI18n } from "vue-i18n";

const loadLocale = async (name) => {
  const data = await import(`../langs/${name}.ts`);
  return { [name]: data.default };
};

const messages = {
  ...(await loadLocale("en-US")),
  ...(await loadLocale("zh-CN")),
};

// 2. Create i18n instance with options
const i18n = createI18n({
  legacy: false,
  locale: "zh-CN", // set locale
  fallbackLocale: "zh-CN", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
});

export default i18n;
