import { FormField } from "./FormField";
import { SelectField } from "./SelectField";
import type { FormData } from "../../types/formMaterial";
import { useFieldArray } from "react-hook-form";
import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";

type DataMaterialsProps = {
  readonly register: UseFormRegister<FormData>;
  readonly errors: FieldErrors<FormData>;
  readonly control: Control<FormData>;
};

export function DataMaterials({ register, errors, control }: DataMaterialsProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "materials",
  });

  return (
    <div className="space-y-6">
      {/* Cabeçalho da seção */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Materiais
        </h2>
        <button
          type="button"
          onClick={() => append({ name: "", code: "", quantity: 1, unit: "unidade" })} // <-- unit obrigatório
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          + Adicionar Material
        </button>
      </div>

      {/* Lista de materiais */}
      <div className="space-y-4">
        {fields.map((field, index) => (
        <div key={field.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Material {index + 1}</h3>
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 hover:text-red-800 px-2 py-1"
              >
                Remover
              </button>
            )}
          </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

              {/* Unidade */}
              <SelectField<FormData>
                id={`material-unit-${index}`}
                name={`materials.${index}.unit`}
                label="Unidade"
                register={register}
                error={errors.materials?.[index]?.unit}
                options={[
                  { value: "unidade", label: "Unidade" },
                  { value: "metro", label: "Metro" },
                ]}
              />


              {/* Quantidade */}
              <FormField<FormData>
                id={`material-quantity-${index}`}
                name={`materials.${index}.quantity`}
                label="Quantidade"
                type="number"
                min={field.unit === "unidade" ? 1 : 0.01}
                step={field.unit === "unidade" ? 1 : 0.01}
                placeholder="0"
                register={register}
                registerOptions={{ valueAsNumber: true }}
                error={errors.materials?.[index]?.quantity}
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
