import React from 'react'
import './styles/Main.css';
import Nav from './components/Nav';
import DiscriptionPage from './Pages/DiscriptionPage';
import EditorialPage from './Pages/EditorialPage';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolutionPage from './Pages/SolutionPage';
import SubmissionPage from './Pages/SubmissionPage';

const App = () => {
  return (
    
     <Router>
      <Nav/>
    <Routes>
      <Route path="/" element={<DiscriptionPage />} />
      <Route path="/editorial" element={<EditorialPage />} />
      <Route path="/solution" element={<SolutionPage />} />
      <Route path="/submission" element={<SubmissionPage />} />
    </Routes>
  </Router>
   
  )
}

export default App
