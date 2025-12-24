// lib/dictionary.ts
import { Locale } from '@/i18n-config';

// ✅ Type-safe dictionary loader
const dictionaries = {
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale) => {
  try {
    // ✅ Validate locale exists
    if (!dictionaries[locale]) {
      console.warn(`Dictionary for locale "${locale}" not found, falling back to "ru"`);
      return dictionaries.ru();
    }

    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error);
  }
};

// ✅ Export type for dictionary
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;