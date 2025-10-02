import { FormField } from './FormField';
import type { FormData } from '../../types/formMaterial';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import { LuClipboardList } from 'react-icons/lu';

type DataServiceProps = {
  readonly register: UseFormRegister<FormData>;
  readonly errors: FieldErrors<FormData>;
};

export function DataService({ register, errors }: DataServiceProps) {
  return (
    <div className="bg-[#f4f9fd]/80 backdrop-blur-sm rounded-2xl shadow border-0 p-6 space-y-6 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
      <div className="pb-4">
        <h2 className="flex items-center space-x-2 text-xl font-semibold text-gray-900">
          <div className="w-6 h-6 text-[#302b4b]">
            <LuClipboardList />
          </div>
          <span>Detalhes do serviço</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Data */}
        <FormField<FormData>
          id="officer-date"
          name="officer.date"
          label="Data *"
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
          multiline={true}
          error={errors.officer?.activity}
        />
      </div>
    </div>
  );
}
