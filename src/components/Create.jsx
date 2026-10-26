import { useState } from 'react'

export default function Create() {
  // Each input keeps its value in React state.
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')
  // This flag controls the confirmation shown below the form.
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    // Keep React in control of the form instead of reloading the page.
    event.preventDefault()
    // The lab asks for console output; trim removes spaces at either end.
    console.log('Movie title:', title.trim())
    console.log('Movie year:', year)
    console.log('Movie poster:', poster.trim())
    setSubmitted(true)
  }

  return (
    <section className="create-page">
      <h2 className="mb-4">This is my Create Component.</h2>
      {/* Editing any field clears the previous submission message. */}
      <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
        {/* The label matches the input ID; the pattern rejects whitespace-only titles. */}
        <div className="mb-3">
          <label htmlFor="movie-title" className="form-label">Add Movie Title:</label>
          <input id="movie-title" className="form-control" type="text"
            value={title} onChange={(event) => setTitle(event.target.value)}
            required pattern=".*\S.*" title="Enter a movie title." />
        </div>
        {/* Let the browser check that the year is a whole number in range. */}
        <div className="mb-3">
          <label htmlFor="movie-year" className="form-label">Add Movie Year:</label>
          <input id="movie-year" className="form-control" type="number"
            min="1888" max="9999" step="1" value={year}
            onChange={(event) => setYear(event.target.value)} required />
        </div>
        {/* Accept a web address for the poster rather than a local file path. */}
        <div className="mb-3">
          <label htmlFor="movie-poster" className="form-label">Add Movie Poster:</label>
          <input id="movie-poster" className="form-control" type="url"
            value={poster} onChange={(event) => setPoster(event.target.value)}
            required pattern="https?://.+" title="Enter an HTTP or HTTPS image URL." />
        </div>
        <button className="btn btn-primary" type="submit">Add Movie</button>
      </form>
      {submitted && <p className="mt-3" role="status">Movie details logged to the console.</p>}
    </section>
  )
}
