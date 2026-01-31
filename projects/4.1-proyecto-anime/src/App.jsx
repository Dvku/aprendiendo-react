import './index.css'
import { Animes } from './components/animes.jsx'
import { useAnime } from './hooks/useAnime.js'

function App() {

  // Usamos el hook personalizado
  const { animes, getAnimes, loading } = useAnime()

  // Función para capturar el "submit"
  const handleSubmit = (event) => {
    // Evitar que la página se recargue
    event.preventDefault()

    // Recuperar los datos del formulario
    const fields = new FormData(event.target)

    // Obtener el valor del input "query"
    const query = fields.get('query')

    getAnimes({ search: query })
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Anime</h1>

        <form className='form' onSubmit={handleSubmit}>

          <input
            name='query'
            placeholder='Naruto, One Piece...'
            type='text'
          />

          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Animes animes={animes} />}
      </main>
      

    </div>
  )
}

export default App
