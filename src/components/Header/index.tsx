import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi'; // ícone vertical bonito

type HeaderProps = {
  readonly title: string;
};

export function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fechar menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center relative">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">{title}</h1>

        {/* Botão com ícone */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            aria-label="Abrir menu de opções"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <HiDotsVertical size={24} />
          </button>

          {/* Menu oculto */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl border border-gray-200 z-10">
              <button
                onClick={() => navigate('/launches')}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-xl"
              >
                Visualizar Lançamentos
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
