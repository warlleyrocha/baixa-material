import { formatDate } from '../../utils/formatDate';
import type { FormData } from '../../types/formMaterial';

// Função que gera o texto completo e organizado para WhatsApp
export function generateWhatsAppText(data: FormData) {
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
