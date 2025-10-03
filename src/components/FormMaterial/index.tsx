import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { generateWhatsAppText } from '@/services/whatsapp/generateWhatsAppText';
import { saveLaunchFromForm } from '@/services/storage/launchStorage';

import { formSchema } from '@/types/formMaterial';
import type { FormData } from '@/types/formMaterial';

import { DataOfficer } from '@/components/FormMaterial/DataOfficer';
import { DataMaterials } from '@/components/FormMaterial/DataMaterials';
import { DataLocation } from '@/components/FormMaterial/DataLocation';
import { DataService } from '@/components/FormMaterial/DataService';
import { SuccessFeedback } from '@/components/SuccessFeedback';

type FormProps = {
  readonly onNewLaunch?: (launch: any) => void;
};

export function Form({ onNewLaunch }: FormProps) {
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    setError(null);

    const text = generateWhatsAppText(data);

    // Copiar texto para o clipboard
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Salvar no localStorage
        try {
          const newLaunch = saveLaunchFromForm(data);
          onNewLaunch?.(newLaunch);

          setShowSuccess(true);
          reset();
        } catch (error) {
          console.error('Erro ao salvar dados: ', error);
          const errorMessage = error instanceof Error ? error.message : 'Erro ao salvar dados';
          setError(errorMessage);
        }
      })
      .catch((clipboardError) => {
        console.error('Erro ao copiar texto para o clipboard: ', clipboardError);
        setError('Erro ao copiar texto para o clipboard. Por favor, tente novamente.');
      });
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* Dados do técnico */}
        <DataOfficer register={register} errors={errors} />

        {/* Localização */}
        <DataLocation register={register} errors={errors} />

        {/*Detalhes do serviço */}
        <DataService register={register} errors={errors} />

        {/* Materiais */}
        <DataMaterials register={register} errors={errors} control={control} />

        {/* Botão de submissão */}
        <div className="flex justify-center bg-[#f4f9fd]/80 backdrop-blur-sm rounded-2xl shadow border-0 p-6 space-y-6 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={!isValid}
            className={`h-12 px-6 rounded-xl font-medium transition-colors text-white ${
              isValid ? 'bg-[#302b4b] hover:bg-[#4a3f6b]' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isValid ? 'Gerar Texto WhatsApp' : 'Preencha todos os campos'}
          </button>
        </div>
      </form>

      {/* Feedback de Sucesso */}
      <SuccessFeedback isVisible={showSuccess} onClose={() => setShowSuccess(false)} />

      <footer className="mt-[20px] text-center text-sm text-gray-500 pt-6">
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/warlley-rossmann-rocha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Warlley Rocha
        </a>
      </footer>
    </div>
  );
}
