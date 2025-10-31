// types/requestMaterial.ts
import { z } from 'zod';
import { materialSchema } from './formMaterial';

// Deriva de formSchema, mas ajusta o que não é obrigatório aqui
export const requestSchema = z.object({
  officer: z.object({
    name: z.string().min(1, 'Nome do técnico é obrigatório'),
    secondName: z.string().optional(),
    registration: z.string().min(1, 'Matrícula é obrigatória'),
    secondRegistration: z.string().optional(),

    date: z.string().min(1, 'Data é obrigatória'),
  }),
  materials: z.array(materialSchema).min(1, 'Adicione pelo menos 1 material'),
});

export type RequestFormData = z.infer<typeof requestSchema>;
