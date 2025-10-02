import { FormField } from './FormField';
import type { FormData } from '../../types/formMaterial';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

type DataOfficerProps = {
  readonly register: UseFormRegister<FormData>;
  readonly errors: FieldErrors<FormData>;
};

export function DataOfficer({ register, errors }: DataOfficerProps) {
  return (
    <div className="bg-[#f4f9fd]/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 pt-1 space-y-6 transform hover:scale-[1.01] transition-all duration-300">
      <div className="pb-4">
        <h2 className="flex items-center space-x-2 text-xl font-semibold text-gray-900">
          <div className="w-6 h-6 text-blue-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="m22 21-3-3" />
              <circle cx="17" cy="17" r="3" />
            </svg>
          </div>
          <span>Dados dos Técnicos</span>
        </h2>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nomes dos técnicos */}
          <FormField<FormData>
            id="officer-name"
            name="officer.name"
            label="Oficial I *"
            placeholder="Digite o nome do técnico"
            register={register}
            required
            error={errors.officer?.name}
          />
          <FormField<FormData>
            id="officer-second-name"
            name="officer.secondName"
            label="Oficial II"
            placeholder="Digite o nome do segundo técnico"
            register={register}
            error={errors.officer?.secondName}
          />

          {/* Matrículas */}
          <FormField<FormData>
            id="officer-registration"
            name="officer.registration"
            label="Matrícula *"
            maxLength={10}
            placeholder="Ex: 123456"
            register={register}
            required
            error={errors.officer?.registration}
          />
          <FormField<FormData>
            id="officer-second-registration"
            name="officer.secondRegistration"
            label="Matrícula do Segundo Técnico"
            maxLength={10}
            placeholder="Ex: 654321"
            register={register}
            error={errors.officer?.secondRegistration}
          />
        </div>
      </div>
    </div>
  );
}
