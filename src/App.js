import './App.css';
import "antd/dist/reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { CvGenerator } from './components/cv-form/CVGenerator';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv-generator" element={<CvGenerator />} />
        </Routes>
    </Router>
  );
};

export default App;
