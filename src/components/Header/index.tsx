import { useNavigate } from 'react-router-dom';
import { FiFileText } from 'react-icons/fi';
import { FaArrowRotateLeft } from 'react-icons/fa6';

type HeaderProps = {
  readonly title: string;
  readonly subtitle?: string;
};

export function Header({
  title,
  subtitle = 'Sistema moderno de gestão de relatórios',
}: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md border-b border-transparent">
      {/* Bolas de fundo */}
      <div className="absolute -top-16 -left-16 h-52 w-52 rounded-full bg-indigo-400 opacity-30"></div>
      <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-purple-400 opacity-30"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Ícone + título */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="bg-white/25 p-4 cursor-pointer rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Ir para Home"
          >
            <FiFileText size={24} className="text-white" />
          </button>
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold text-white">{title}</h1>
            <p className="text-sm md:text-base text-white/75">{subtitle}</p>
          </div>
        </div>

        <button
          type="button"
          className="hover:bg-white/20 transition-colors bg-white/25 p-2 rounded-lg flex items-center justify-center"
          onClick={() => navigate('/launches')}
          aria-label="Voltar"
        >
          <FaArrowRotateLeft size={20} className="text-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;
