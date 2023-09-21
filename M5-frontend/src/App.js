import HomePage from "./pages/Kelsie/HomePage/Home.jsx";
import PropertyList from "../src/pages/Helena/PropertyListPage/PropertyList.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<PropertyList />} />
      </Routes>
    </Router>
  );
}

export default App;
