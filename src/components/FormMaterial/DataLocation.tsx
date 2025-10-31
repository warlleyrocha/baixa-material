import { FormField } from './FormField';
import type { FormData } from '../../types/formMaterial';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { MapPin } from 'lucide-react';
import { SelectField } from './SelectField';
import { brazilStates } from '../../utils/statesUtils';

type DataLocationProps = {
  readonly register: UseFormRegister<FormData>;
  readonly errors: FieldErrors<FormData>;
};

export function DataLocation({ register, errors }: DataLocationProps) {
  return (
    <div className="bg-[#f4f9fd]/80 backdrop-blur-sm rounded-2xl shadow border-0 p-6 space-y-6 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
      <div className="pb-4">
        <h2 className="flex items-center space-x-2 text-xl font-semibold text-[#302b4b]">
          <div className="w-6 h-6 text-[#302b4b]">
            <MapPin />
          </div>
          <span>Localização</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cidade e Estado */}
        <FormField<FormData>
          id="officer-city"
          name="officer.city"
          label="Cidade *"
          placeholder="Digite a cidade"
          register={register}
          error={errors.officer?.city}
        />
        <SelectField<FormData>
          id="officer-state"
          name="officer.state"
          label="Estado *"
          options={brazilStates}
          register={register}
          error={errors.officer?.state}
        />

        {/* Rua e Número */}
        <FormField<FormData>
          id="officer-street"
          name="officer.street"
          label="Rua *"
          placeholder="Nome da rua"
          register={register}
          error={errors.officer?.street}
        />
        <FormField<FormData>
          id="officer-number"
          name="officer.number"
          label="Número"
          maxLength={5}
          placeholder="Ex: 123"
          register={register}
          error={errors.officer?.number}
        />

        {/* Bairro ocupando toda a largura */}
        <FormField<FormData>
          id="officer-hood"
          name="officer.hood"
          label="Bairro *"
          placeholder="Nome do bairro"
          register={register}
          error={errors.officer?.hood}
          className="md:col-span-2"
        />
      </div>
    </div>
  );
}
