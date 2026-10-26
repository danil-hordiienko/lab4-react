import { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './Movies.jsx'

const moviesUrl = 'https://data-rep-mern-application.github.io/dataserver/movies.json'

export default function Read() {
  // Store the server data separately from loading and error messages.
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // The signal lets Axios cancel this request during cleanup.
    const controller = new AbortController()

    // Stop waiting after ten seconds if the server does not respond.
    axios.get(moviesUrl, { signal: controller.signal, timeout: 10000 })
      .then((response) => {
        // The lab's server uses myArray for the movie list.
        if (!Array.isArray(response.data.myArray)) {
          throw new Error('The server returned an invalid movie list.')
        }
        // Updating state causes React to render the returned movie cards.
        setMovies(response.data.myArray)
      })
      .catch(() => {
        // Leaving the page is an intentional cancellation, not a loading error.
        if (!controller.signal.aborted) {
          setError('Could not load movies. Please try again later.')
        }
      })
      .finally(() => {
        // End the loading state after either success or failure.
        if (!controller.signal.aborted) setLoading(false)
      })

    // Cancel the request if we leave Read before it finishes.
    return () => controller.abort()
  }, []) // Run when Read mounts, rather than on every render.

  return (
    <section>
      <h2 className="mb-4">This is my Read Component.</h2>
      {loading && <p role="status">Loading movies...</p>}
      {error && <p className="text-danger" role="alert">{error}</p>}
      {/* Only show the list once the request has finished successfully. */}
      {!loading && !error && (
        movies.length > 0 ? <Movies myMovies={movies} /> : <p>No movies found.</p>
      )}
    </section>
  )
}
