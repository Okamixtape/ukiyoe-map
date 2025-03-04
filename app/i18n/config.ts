export const defaultLocale = 'fr';
export const locales = ['fr', 'en', 'ja'];

export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  'fr': 'Français',
  'en': 'English',
  'ja': '日本語'
};

// Define a type for our translation keys
type TranslationKey = 'app.title' | 'filter.artist' | 'filter.period' | 'map.loading';

// Define a type for a single language's translations
type TranslationSet = Record<TranslationKey, string>;

// Define the type for our translations object
type Translations = Record<Locale, TranslationSet>;

// Simple translation function - in a real app, you would use a proper i18n library
export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

// Basic translations for demonstration
const translations: Translations = {
  'fr': {
    'app.title': 'Carte interactive d\'Ukiyo-e',
    'filter.artist': 'Filtrer par artiste',
    'filter.period': 'Filtrer par période',
    'map.loading': 'Chargement de la carte...',
  },
  'en': {
    'app.title': 'Interactive Ukiyo-e Map',
    'filter.artist': 'Filter by artist',
    'filter.period': 'Filter by period',
    'map.loading': 'Loading map...',
  },
  'ja': {
    'app.title': '浮世絵インタラクティブマップ',
    'filter.artist': '作者で絞り込む',
    'filter.period': '時代で絞り込む',
    'map.loading': '地図を読み込んでいます...',
  }
};
