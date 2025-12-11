import { Routes, Route } from 'react-router-dom'
import { Page as Home } from '@/pages/Home.page'
import TwSizeIndicator from './components/TwSizeIndicator'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TwSizeIndicator />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
