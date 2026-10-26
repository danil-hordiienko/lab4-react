import Container from 'react-bootstrap/Container'

export default function Footer() {  // Keep the author and lab details in one shared component.
  return (
    <footer className="border-top bg-white py-3">
      <Container>
        <p className="mb-0 text-secondary">Danil Hordiienko — Lab 4</p>
      </Container>
    </footer>
  )
}
