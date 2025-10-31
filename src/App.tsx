import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { Form } from './pages/Baixa';
import { LaunchesList } from './pages/ViewList';
import { RequestMaterial } from './pages/RequestMaterial';
import Home from './pages/Home';

function AppContent() {
  const [launches, setLaunches] = useState<any[]>([]);
  const location = useLocation();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('launches') || '[]');
    setLaunches(saved);
  }, []);

  const handleNewLaunch = (launch: any) => {
    setLaunches((prev) => [...prev, launch]);
  };

  // Verifica se não está na home
  const showHeader = location.pathname !== '/';

  // Titles
  const routeTitles: Record<string, string> = {
    '/form-baixa-material': 'Baixa de Material',
    '/request-material': 'Requisição de Material',
    '/launches': 'Histórico de Baixas',
  };

  //Subtitles
  const routeSubtitles: Record<string, string> = {
    '/form-baixa-material': 'Registrar materiais utilizados',
    '/request-material': 'Solicitar novos materiais',
    '/launches': 'Consultar registros anteriores',
  };

  // Define o título com base na rota atual
  const headerTitle = routeTitles[location.pathname] || '';
  const headerSubtitle = routeSubtitles[location.pathname] || '';

  return (
    <>
      {showHeader && <Header title={headerTitle} subtitle={headerSubtitle} />}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-[4px] px-[16px] pb-[8px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form-baixa-material" element={<Form onNewLaunch={handleNewLaunch} />} />
          <Route path="/request-material" element={<RequestMaterial />} />
          <Route path="/launches" element={<LaunchesList launches={launches} />} />
        </Routes>

        <footer className="mt-[20px] text-center text-sm text-gray-500 pt-6">
          Desenvolvido por{' '}
          <a
            href="https://www.linkedin.com/in/warlley-rossmann-rocha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Warlley Rocha
          </a>
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
