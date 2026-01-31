
function ListOfAnimes({ animes }) {
    return (

        <ul className="anime-list">
            {animes.map(anime => (
                <li key={anime.id} className="anime-card">
                    <h3>{anime.title}</h3>
                    <img src={anime.image} alt={anime.title} />
                </li>
            ))}
        </ul>

    )
}

function NoAnimesResults() {
    return (
        <p>No se encontraron animes para esta búsqueda</p>
    )
}

export function Animes({ animes }) {
    // Renderizado condicional
    const hasAnimes = animes?.length > 0;

    return (
        hasAnimes
            ? <ListOfAnimes animes={animes} />
            : <NoAnimesResults />
    )
}