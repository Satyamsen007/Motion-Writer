import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './components/home.jsx'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
