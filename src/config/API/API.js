const API_KEY = import.meta.env.VITE_API_KEY;
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN
const API_SEARCH_DOMAIN = import.meta.env.VITE_SERACH_DOMAIN


export const endpointPath = (country, category) => (
    `${API_DOMAIN}${country}&lang=en&category=${category}&apikey=${API_KEY}`
);

export const endpointSearch = (searchQuery) => (
    `${API_SEARCH_DOMAIN}${searchQuery}&lang=en&apikey=${API_KEY}`
);