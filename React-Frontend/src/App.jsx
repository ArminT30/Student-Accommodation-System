import './App.css'
import Header from './components/Header'
import PropertyList from './components/PropertyList'

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Find the best PGs and hostels near your location.</h2>
        <p>
          Search, compare and choose your perfect student accommodation.
        </p>

        <PropertyList />
      </main>
    </>
  )
}

export default App