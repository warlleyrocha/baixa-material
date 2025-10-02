import type { FormData } from '../../types/formMaterial';

// Tipo específico para Launch armazenado
export interface Launch {
  id: string;
  date: string;
  activity: string | undefined;
  officers: Array<{
    name: string | undefined;
    registration: string | undefined;
  }>;
  materials: Array<{
    name: string;
    code: string;
    unit: string;
    quantity: number;
  }>;
}

const STORAGE_KEY = 'launches';

/**
 * Recupera todos os launches do localStorage
 */
export function getLaunches(): Launch[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erro ao recuperar launches:', error);
    return [];
  }
}

/**
 * Converte dados do formulário para o formato Launch
 */
export function createLaunchFromFormData(data: FormData): Launch {
  return {
    id: crypto.randomUUID(),
    date: data.officer.date,
    activity: data.officer.activity,
    officers: [
      {
        name: data.officer.name,
        registration: data.officer.registration,
      },
      {
        name: data.officer.secondName,
        registration: data.officer.secondRegistration,
      },
    ],
    materials: data.materials,
  };
}

/**
 * Salva um novo launch no localStorage
 */
export function saveLaunch(launch: Launch): void {
  try {
    const launches = getLaunches();
    launches.push(launch);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(launches));
  } catch (error) {
    console.error('Erro ao salvar launch:', error);
    throw new Error('Falha ao salvar dados');
  }
}

/**
 * Salva launch a partir dos dados do formulário
 * @returns O launch criado
 */
export function saveLaunchFromForm(data: FormData): Launch {
  const launch = createLaunchFromFormData(data);
  saveLaunch(launch);
  return launch;
}
