import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[52px]">
        <Header />
        <About />
          
      </main>
    </>
  )
}

export default App