import { DataOfficer } from '@/components/FormMaterial/DataOfficer';
import { DataMaterials } from '@/components/FormMaterial/DataMaterials';
import { BaseForm } from '@/components/BaseForm';
import { FormField } from '@/components/FormMaterial/FormField';
import { generateRequestText } from '@/utils/whatsapp/generateWhatsAppText';
import { requestSchema, type RequestFormData } from '@/types/requestMaterial';

const defaultValues: RequestFormData = {
  officer: {
    name: '',
    secondName: '',
    registration: '',
    secondRegistration: '',
    date: '',
  },
  materials: [{ name: '', code: '', unit: 'unidade', quantity: 1 }],
};

export function RequestMaterial() {
  const handleSubmit = async (data: RequestFormData) => {
    // Gerar texto de requisição
    const text = generateRequestText(data);
    await navigator.clipboard.writeText(text);
    console.log('Requisição criada:', data);
  };

  return (
    <BaseForm
      schema={requestSchema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      submitButtonText="Gerar Requisição"
    >
      {({ register, errors, control }) => (
        <>
          <DataOfficer register={register} errors={errors} />
          <div className="bg-[#f4f9fd]/80 backdrop-blur-sm rounded-2xl shadow border-0 p-6 pt-1 space-y-6 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
            <FormField<RequestFormData>
              id="officer-date"
              name="officer.date"
              label="Data *"
              type="date"
              register={register}
              error={errors.officer?.date}
            />
          </div>

          <DataMaterials register={register} errors={errors} control={control} />
        </>
      )}
    </BaseForm>
  );
}

export default RequestMaterial;
