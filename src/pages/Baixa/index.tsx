import { generateWhatsAppText } from '@/utils/whatsapp/generateWhatsAppText';
import { saveLaunchFromForm } from '@/services/storage/launchStorage';
import { formSchema } from '@/types/formMaterial';
import type { FormData } from '@/types/formMaterial';
import { DataOfficer } from '@/components/FormMaterial/DataOfficer';
import { DataMaterials } from '@/components/FormMaterial/DataMaterials';
import { DataLocation } from '@/components/FormMaterial/DataLocation';
import { DataService } from '@/components/FormMaterial/DataService';
import { BaseForm } from '@/components/BaseForm';

type FormProps = {
  readonly onNewLaunch?: (launch: any) => void;
};

const defaultValues: FormData = {
  officer: {
    name: '',
    secondName: '',
    registration: '',
    secondRegistration: '',
    city: '',
    state: 'MG',
    street: '',
    number: '',
    hood: '',
    date: '',
    activity: '',
  },
  materials: [{ name: '', code: '', unit: 'unidade', quantity: 1 }],
};

export function Form({ onNewLaunch }: FormProps) {
  const handleSubmit = async (data: FormData) => {
    const text = generateWhatsAppText(data);
    await navigator.clipboard.writeText(text);
    const newLaunch = saveLaunchFromForm(data);
    onNewLaunch?.(newLaunch);
  };

  return (
    <BaseForm
      schema={formSchema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      submitButtonText="Gerar Texto WhatsApp"
    >
      {({ register, errors, control }) => (
        <>
          <DataOfficer register={register} errors={errors} />
          <DataLocation register={register} errors={errors} />
          <DataService register={register} errors={errors} />
          <DataMaterials register={register} errors={errors} control={control} />
        </>
      )}
    </BaseForm>
  );
}

// Exportação default para manter compatibilidade
export default Form;
