import { FormField } from './FormField';
import { SelectField } from './SelectField';
import type { FormData } from '../../types/formMaterial';
import { useFieldArray } from 'react-hook-form';
import type { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { GoTrash } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';

type DataMaterialsProps = {
  readonly register: UseFormRegister<FormData>;
  readonly errors: FieldErrors<FormData>;
  readonly control: Control<FormData>;
};

export function DataMaterials({ register, errors, control }: DataMaterialsProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'materials',
  });

  return (
    <div className="bg-[##eff5ff]/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 pt-[24px] transform hover:scale-[1.01] transition-all duration-300">
      {/* Cabeçalho da seção */}
      <div className="flex justify-between items-center px-[30px]">
        <h2 className="flex items-center space-x-2 text-xl font-semibold text-gray-900">
          <span>Materiais</span>
        </h2>
        <button
          type="button"
          onClick={() => append({ name: '', code: '', quantity: 1, unit: 'unidade' })}
          className="w-[120px] h-[36px] sm:w-auto sm:h-auto sm:px-4 sm:py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center text-md sm:text-base font-semibold"
        >
          <span className="sm:hidden">+</span>
          <span className="hidden sm:flex sm:items-center">+ Adicionar Material</span>
        </button>
      </div>

      {/* Lista de materiais */}
      <div className="py-6 px-2 ">
        {fields.length === 0 ? (
          <div className="space-y-4">
            <div className="text-center py-8 text-gray-500">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-6 h-0.5 bg-gray-400 rounded"></div>
                  <div className="w-0.5 h-6 bg-gray-400 rounded absolute"></div>
                </div>
              </div>
              <p className="text-lg mb-2">Nenhum material adicionado ainda</p>
              <p className="text-sm">Clique em "Adicionar Material" para começar</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className={`
                  bg-[#f0f6ff] backdrop-blur-sm border border-white/20 rounded-xl p-4 
                  shadow-lg hover:shadow-xl
                  
                `}
              >
                <div className="pb-4 flex justify-between">
                  <div className="flex items-center space-x-2">
                    <BsBoxSeam color="blue" />
                    <h3 className="flex items-center space-x-2 text-md font-semibold text-gray-900">
                      Material {index + 1}
                    </h3>
                  </div>
                  {fields.length > 0 && <GoTrash color="red" onClick={() => remove(index)} />}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField<FormData>
                    id={`material-name-${index}`}
                    name={`materials.${index}.name`}
                    label="Nome do Material"
                    placeholder="Ex: Cabo de rede"
                    register={register}
                    error={errors.materials?.[index]?.name}
                  />

                  <FormField<FormData>
                    id={`material-code-${index}`}
                    name={`materials.${index}.code`}
                    label="Código"
                    placeholder="Ex: CB001"
                    register={register}
                    error={errors.materials?.[index]?.code}
                  />

                  <SelectField<FormData>
                    id={`material-unit-${index}`}
                    name={`materials.${index}.unit`}
                    label="Unidade"
                    register={register}
                    error={errors.materials?.[index]?.unit}
                    options={[
                      { value: 'unidade', label: 'Unidade' },
                      { value: 'metro', label: 'Metro' },
                    ]}
                  />

                  <FormField<FormData>
                    id={`material-quantity-${index}`}
                    name={`materials.${index}.quantity`}
                    label="Quantidade"
                    type="number"
                    min={field.unit === 'unidade' ? 1 : 0.01}
                    step={field.unit === 'unidade' ? 1 : 0.01}
                    placeholder="0"
                    register={register}
                    registerOptions={{ valueAsNumber: true }}
                    error={errors.materials?.[index]?.quantity}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
