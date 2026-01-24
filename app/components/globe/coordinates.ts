// ✅ Extended country coordinates for all regions
export const countryCoordinates = [
    // CIS Countries
    {
        text: { en: 'Russia', ru: 'Россия' },
        alpha2: 'RU',
        lat: 61.524,
        lng: 105.3188,
    },
    {
        text: { en: 'Kazakhstan', ru: 'Казахстан' },
        alpha2: 'KZ',
        lat: 48.0196,
        lng: 66.9237,
    },
    {
        text: { en: 'Uzbekistan', ru: 'Узбекистан' },
        alpha2: 'UZ',
        lat: 41.3775,
        lng: 64.5853,
    },

    // Europe
    {
        text: { en: 'Italy', ru: 'Италия' },
        alpha2: 'IT',
        lat: 41.8719,
        lng: 12.5674,
    },
    {
        text: { en: 'Germany', ru: 'Германия' },
        alpha2: 'DE',
        lat: 51.1657,
        lng: 10.4515,
    },
    {
        text: { en: 'France', ru: 'Франция' },
        alpha2: 'FR',
        lat: 46.2276,
        lng: 2.2137,
    },

    // Middle East
    {
        text: { en: 'Turkey', ru: 'Турция' },
        alpha2: 'TR',
        lat: 38.9637,
        lng: 35.2433,
    },
    {
        text: { en: 'UAE', ru: 'ОАЭ' },
        alpha2: 'AE',
        lat: 23.4241,
        lng: 53.8478,
    },

    // Asia
    {
        text: { en: 'China', ru: 'Китай' },
        alpha2: 'CN',
        lat: 35.8617,
        lng: 104.1954,
    },
    {
        text: { en: 'India', ru: 'Индия' },
        alpha2: 'IN',
        lat: 21.7679,
        lng: 78.8718,
    },

    // International
    {
        text: { en: 'USA', ru: 'США' },
        alpha2: 'US',
        lat: 37.0902,
        lng: -95.7129,
    },
]

// ✅ All countries we want to show on the globe
export const allCountries = new Set([
    // CIS
    'RU', 'KZ', 'UZ', 'BY', 'AM', 'KG', 'TJ', 'MD', 'AZ',
    // Europe
    'IT', 'DE', 'FR', 'GB', 'ES', 'PL', 'NL', 'BE', 'AT', 'CH',
    'SE', 'NO', 'DK', 'FI', 'PT', 'GR', 'CZ', 'RO', 'HU', 'BG',
    // South America
    'BR', 'AR', 'CL', 'CO', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY',
    // Middle East
    'TR', 'AE', 'SA', 'IQ', 'IR', 'JO', 'LB', 'SY', 'IL', 'KW', 'QA', 'OM',
    // Asia
    'CN', 'IN', 'JP', 'KR', 'VN', 'TH', 'ID', 'MY', 'SG', 'PH', 'BD', 'PK',
    // International
    'US', 'CA', 'AU', 'NZ', 'MX', 'ZA', 'EG', 'NG', 'KE', 'ET',
])