import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import TwSizeIndicator from './components/TwSizeIndicator'

function App() {
  return (
    <>
      <TwSizeIndicator />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
