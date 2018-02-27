const API_URL = process.env.API_URL || 'http://localhost:8001';

export const SEARCH_ARTIST_URL = `${API_URL}/search/artist?q=:keyword`;
export const ARTIST_ALBUMS_URL = `${API_URL}/artist/:id/albums`;
