import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import ExperiencePreview from './components/ExperiencePreview'

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[52px]">
        <Header />
        <About />
        <ExperiencePreview />
          
      </main>
    </>
  )
}

export default App