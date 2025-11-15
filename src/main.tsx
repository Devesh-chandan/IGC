import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Hero } from './components/Hero'
import { ThemeProvider } from 'next-themes'
import { ProblemStatement } from './components/ProblemStatement'
import { Dashboard } from './components/Dashboard'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Hero />
      <ProblemStatement />
      <Dashboard />
      <Features />
      <Footer />
    </div>
  )
}

// THIS IS THE NEW CODE YOU NEED:
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* You are just "wrapping" <App /> with <ThemeProvider> */}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
