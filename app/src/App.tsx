import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Form } from "./components/FormMaterial";
import { LaunchesList } from "./components/ViewList/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [launches, setLaunches] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("launches") || "[]");
    setLaunches(saved);
  }, []);

  const handleNewLaunch = (launch: any) => {
    setLaunches((prev) => [...prev, launch]);
  };

  return (
    <Router>
      <Header title="Baixa de Material" />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
        <Routes>
          <Route path="/" element={<Form onNewLaunch={handleNewLaunch} />} />
          <Route path="/launches" element={<LaunchesList launches={launches} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
