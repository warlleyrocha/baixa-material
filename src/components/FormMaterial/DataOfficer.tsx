import { FormField } from './FormField';
import type { FormData } from '../../types/formMaterial';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

type DataOfficerProps = {
  readonly register: UseFormRegister<FormData>;
  readonly errors: FieldErrors<FormData>;
};

export function DataOfficer({ register, errors }: DataOfficerProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Dados dos Técnicos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nomes dos técnicos */}
        <FormField<FormData>
          id="officer-name"
          name="officer.name"
          label="Oficial I"
          placeholder="Digite o nome do técnico"
          register={register}
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
          label="Matrícula"
          placeholder="Ex: 123456"
          register={register}
          error={errors.officer?.registration}
        />
        <FormField<FormData>
          id="officer-second-registration"
          name="officer.secondRegistration"
          label="Matrícula do Segundo Técnico"
          placeholder="Ex: 654321"
          register={register}
          error={errors.officer?.secondRegistration}
        />

        {/* Cidade e Estado */}
        <FormField<FormData>
          id="officer-city"
          name="officer.city"
          label="Cidade"
          placeholder="Digite a cidade"
          register={register}
          error={errors.officer?.city}
        />
        <FormField<FormData>
          id="officer-state"
          name="officer.state"
          label="Estado"
          placeholder="Ex: SP"
          maxLength={2}
          register={register}
          error={errors.officer?.state}
        />

        {/* Rua e Número */}
        <FormField<FormData>
          id="officer-street"
          name="officer.street"
          label="Rua"
          placeholder="Nome da rua"
          register={register}
          error={errors.officer?.street}
        />
        <FormField<FormData>
          id="officer-number"
          name="officer.number"
          label="Número"
          placeholder="Ex: 123"
          register={register}
          error={errors.officer?.number}
        />

        {/* Bairro ocupando toda a largura */}
        <FormField<FormData>
          id="officer-hood"
          name="officer.hood"
          label="Bairro"
          placeholder="Nome do bairro"
          register={register}
          error={errors.officer?.hood}
          className="md:col-span-2"
        />

        {/* Data */}
        <FormField<FormData>
          id="officer-date"
          name="officer.date"
          label="Data"
          type="date"
          register={register}
          error={errors.officer?.date}
        />

        {/* Atividade realizada */}
        <FormField<FormData>
          id="officer-activity"
          name="officer.activity"
          label="Atividade Realizada"
          placeholder="Descreva a atividade realizada"
          register={register}
          error={errors.officer?.activity}
        />
      </div>
    </div>
  );
}
