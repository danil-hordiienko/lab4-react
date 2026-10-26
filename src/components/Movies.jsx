import MovieItem from './MovieItem.jsx'

export default function Movies({ myMovies }) {
  // Read passes the fetched array through the myMovies prop.
  return (
    <div className="movie-grid">
      {/* IMDb IDs keep each card tied to the right movie. */}
      {myMovies.map((movie) => <MovieItem myMovie={movie} key={movie.imdbID} />)}
    </div>
  )
}
