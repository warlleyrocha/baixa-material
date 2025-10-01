import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema } from '../../types/formMaterial';
import type { FormData } from '../../types/formMaterial';
import { formatDate } from '../../utils/formatDate';

import { DataOfficer } from './DataOfficer';
import { DataMaterials } from './DataMaterials';
import { DataLocation } from './DataLocation';
import { DataService } from './DataService';

type FormProps = {
  readonly onNewLaunch?: (launch: any) => void;
};

// Função que gera o texto completo e organizado para WhatsApp
function generateWhatsAppText(data: FormData) {
  const { officer, materials } = data;

  let text = `*BAIXA DE MATERIAIS*\n\n`;

  // Data
  text += `*DATA:* ${formatDate(officer.date)}\n`;

  // Técnicos
  text += `*EQUIPE:* ${officer.name} / ${officer.secondName}\n`;
  text += `*MATRÍCULA:* ${officer.registration} / ${officer.secondRegistration}\n`;

  // Endereço
  text += `*CIDADE:* ${officer.city}, ${officer.state}\n`;
  text += `*RUA:* ${officer.street}, ${officer.number}\n`;
  text += `*BAIRRO:* ${officer.hood}\n\n`;

  // Atividade
  text += `*ATIVIDADE REALIZADA:* ${officer.activity}\n\n`;

  // Materiais
  text += `*MATERIAL UTILIZADO:*\n`;
  materials.forEach((mat, i) => {
    const unitLabel = mat.unit === 'unidade' ? 'unidade(s)' : 'metro(s)';
    text += `${i + 1}. ${mat.name} - Qtd: ${mat.quantity} ${unitLabel}\n*CÓDIGO:* ${mat.code}\n\n`;
  });

  return text;
}

export function Form({ onNewLaunch }: FormProps) {
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
        state: '',
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
    const text = generateWhatsAppText(data);

    // Copiar texto para o clipboard
    navigator.clipboard
      .writeText(text)
      .then(() => alert('Texto copiado para o WhatsApp!'))
      .catch(() => alert('Erro ao copiar o texto'));

    // Salvar no localStorage em formato compatível com LaunchesList
    const newLaunch = {
      id: crypto.randomUUID(),
      date: data.officer.date,
      activity: data.officer.activity,
      officers: [
        { name: data.officer.name, registration: data.officer.registration },
        { name: data.officer.secondName, registration: data.officer.secondRegistration },
      ],
      materials: data.materials,
    };

    const savedLaunches = JSON.parse(localStorage.getItem('launches') || '[]');
    savedLaunches.push(newLaunch);
    localStorage.setItem('launches', JSON.stringify(savedLaunches));

    // Atualizar estado no App
    if (onNewLaunch) onNewLaunch(newLaunch);

    reset();
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 rounded-2xl ">
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
        <div className="flex justify-end bg-[#f4f9fd]/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 space-y-6 transform hover:scale-[1.01] transition-all duration-300">
          <button
            type="submit"
            disabled={!isValid}
            className={`h-12 px-6 rounded-xl font-medium transition-colors text-white ${
              isValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {isValid ? 'Gerar Texto WhatsApp' : 'Preencha todos os campos'}
          </button>
        </div>
      </form>

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
