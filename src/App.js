import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ContainerGrid from './pages/ContainerGrid.jsx'
import PageTemplates from './pages/PageTemplates.jsx'

export default function App() {
  return (
    <main>
      {/* <PageTemplates/> */}
      <Router>
        <Routes>
          <Route path="/" element={<ContainerGrid/>} />
          <Route path="/templates" element={<PageTemplates/>} />
        </Routes>
    </Router>
    </main>
  )
}
