import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Read from './components/Read.jsx'
import Create from './components/Create.jsx'
import './App.css'

export default function App() {  return (
    <div className="app">
      <NavigationBar />
      <Container as="main" className="py-5">        {/* The URL decides which component appears in the main area. */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Container>      {/* Keep the footer visible on every route. */}
      <Footer />
    </div>
  )
}
