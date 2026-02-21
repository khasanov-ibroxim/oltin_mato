// ✅ CIS Countries only
export const countryCoordinates = [
    {
        text: { en: 'Uzbekistan', ru: 'Узбекистан' },
        alpha2: 'UZ',
        lat: 41.3775,
        lng: 64.5853,
    },
    {
        text: { en: 'Russia', ru: 'Россия' },
        alpha2: 'RU',
        lat: 61.524,
        lng: 105.3188,
    },
    {
        text: { en: 'Belarus', ru: 'Беларусь' },
        alpha2: 'BY',
        lat: 53.7098,
        lng: 27.9534,
    },
    {
        text: { en: 'Kyrgyzstan', ru: 'Кыргызстан' },
        alpha2: 'KG',
        lat: 41.2044,
        lng: 74.7661,
    },
    {
        text: { en: 'Kazakhstan', ru: 'Казахстан' },
        alpha2: 'KZ',
        lat: 48.0196,
        lng: 66.9237,
    },
]

// ✅ Only CIS countries we want to show on the globe
export const allCountries = new Set([
    'UZ', 'RU', 'BY', 'KG', 'KZ',
])