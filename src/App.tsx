import { Hero } from './components/Hero'
import { ProblemStatement } from './components/ProblemStatement'
import { Dashboard } from './components/Dashboard'
import { Features } from './components/Features'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Dashboard />
      <Features />
      <Footer />
    </div>
  )
}

export default App 