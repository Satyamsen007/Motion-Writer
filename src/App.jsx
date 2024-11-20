import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
