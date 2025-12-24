// lib/dictionary.ts
import { Locale, i18n } from '@/i18n-config';

// ✅ Type-safe dictionary loader
const dictionaries = {
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: string) => {
  try {
    // ✅ Validate locale exists
    const validLocale = i18n.locales.includes(locale as Locale)
        ? (locale as Locale)
        : i18n.defaultLocale;

    if (!dictionaries[validLocale]) {
      console.warn(`Dictionary for locale "${locale}" not found, falling back to "${i18n.defaultLocale}"`);
      return dictionaries[i18n.defaultLocale]();
    }

    return await dictionaries[validLocale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error);
    // ✅ Return default locale dictionary on error
    return dictionaries[i18n.defaultLocale]();
  }
};

// ✅ Export type for dictionary
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;