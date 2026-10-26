import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

export default function MovieItem({ myMovie }) {
  // Remember a failed image request so the card can show a fallback.
  const [posterFailed, setPosterFailed] = useState(false)

  // Log the supplied movie when the card mounts or receives a new object.
  useEffect(() => {
    console.log('Movie Item:', myMovie)
  }, [myMovie])

  return (
    <Card className="h-100">
      <Card.Header as="h3" className="h5">{myMovie.Title}</Card.Header>
      <Card.Body>
        {/* Some poster links can expire, so leave a readable fallback. */}
        {posterFailed || !myMovie.Poster || myMovie.Poster === 'N/A' ? (
          <p className="poster-placeholder">Poster unavailable</p>
        ) : (
          // Lazy loading delays off-screen posters; alt identifies the movie.
          <img className="movie-poster" src={myMovie.Poster} alt={myMovie.Title}
            width="300" height="450" loading="lazy" onError={() => setPosterFailed(true)} />
        )}
      </Card.Body>
      <Card.Footer>{myMovie.Year}</Card.Footer>
    </Card>
  )
}
