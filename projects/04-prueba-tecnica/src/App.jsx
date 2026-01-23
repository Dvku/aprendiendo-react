import { useEffect, useState } from "react";
import './App.css';
import { getRandomFact } from './services/facts.js';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${firstWord}?size=50&color=red';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    // Para recuperar la cita al cargar la página
    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    // Para recuperar la imagen cada vez que cambia la cita
    useEffect(() => {
        if (!fact) return
         
        const threeFirstWord = fact.split(' ', 3).join(' ');

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red`)
            .then(response => {
            const { url } = response;
                setImageUrl(url)
            })
    }, [fact])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen relacionada con el hecho: ${fact}`} />}
        </main>
    )
}