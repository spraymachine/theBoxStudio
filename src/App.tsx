import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Navbar />
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-content">
            <Hero />
          </div>
        </section>

        <section className="section alt">
          <div className="container" id="portfolio">
          <h2 className="section-title">Our work</h2>
          <Portfolio />
          </div>
        </section>

        <section className="section">
          <div className="container" id="about">
          <h2 className="section-title">About us</h2>
          <About />
          </div>
        </section>

        <section className="section alt">
          <div className="container" id="contact">
          <h2 className="section-title">Contact us</h2>
          <Contact />
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <Footer />
        </div>
      </footer>
    </>
  )
}

export default App
