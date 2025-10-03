import { useEffect } from 'react';

type SuccessFeedbackProps = {
  readonly isVisible: boolean;
  readonly onClose: () => void;
  readonly message?: string;
};

export function SuccessFeedback({
  isVisible,
  onClose,
  message = 'Texto copiado com sucesso!',
}: SuccessFeedbackProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white rounded-xl shadow-2xl px-6 py-4 flex items-center gap-3 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <svg
          className="w-6 h-6 text-green-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-gray-800 font-medium">{message}</p>
      </div>
    </div>
  );
}
