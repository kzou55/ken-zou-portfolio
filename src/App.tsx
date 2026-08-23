import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import ExperiencePreview from './components/ExperiencePreview'
import ProjectPreview from './components/ProjectPreivew'

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[52px]">
        <Header />
        <About />
        <ExperiencePreview />
        <ProjectPreview />
          
      </main>
    </>
  )
}

export default App