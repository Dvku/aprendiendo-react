const API_URL = 'https://api.jikan.moe/v4/anime?q='

export const searchAnime = async ({ search }) => {
    if (search === '') return null

    try {
        // Llamada a la API
        const response = await fetch(`${API_URL}${search}`);
        const data = await response.json();

        // Extraer los datos crudos
        const animes = data.data;

        // Mapear los datos para quedarnos solo con lo que necesitamos
        return animes?.map(anime => ({
            id: anime.mal_id,
            title: anime.title,
            image: anime.images.jpg.image_url,
        }));
    } catch (e) {
        throw new Error('Error buscando animes');
    }
}