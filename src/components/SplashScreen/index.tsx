export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="relative">
        <svg
          width="100"
          height="60"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Linha formando W minimalista */}
          <path
            d="M10 20 L30 40 L50 20 L70 40 L90 20"
            stroke="#302b4b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <animate
              attributeName="d"
              values="M10 20 L30 40 L50 20 L70 40 L90 20;
                      M10 25 L30 35 L50 25 L70 35 L90 25;
                      M10 20 L30 40 L50 20 L70 40 L90 20"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </div>
  );
}
