import { useState } from "react";
import { searchAnime } from "../services/animes.js";

export function useAnime() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(false); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    // Esta función es la que se llamará desde el formulario
    const getAnimes = async ({ search }) => {
        try {
            setLoading(true); // Iniciar carga
            setError(null); // Resetear error previo

            // Pide los datos al servicio
            const newAnimes = await searchAnime({ search });
            // Guarda los datos en el estado
            setAnimes(newAnimes);

        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false); // Finalizar carga
        }
    }

    return { animes, getAnimes, loading, error };
}