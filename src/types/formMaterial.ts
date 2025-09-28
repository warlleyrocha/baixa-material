import { z } from 'zod';

export const materialSchema = z
  .object({
    name: z.string().min(1, 'Nome do material é obrigatório'),
    code: z.string().min(1, 'Código é obrigatório'),
    unit: z.enum(['unidade', 'metro'], { message: 'Selecione a unidade do material' }),
    quantity: z.number().min(0.01, 'Quantidade mínima é 0.01'),
  })
  .superRefine((obj, ctx) => {
    if (obj.unit === 'unidade' && !Number.isInteger(obj.quantity)) {
      ctx.addIssue({
        code: 'custom', // <-- usar string literal "custom" em vez de ZodIssueCode.custom
        message: 'Quantidade deve ser um número inteiro para unidades',
        path: ['quantity'], // aponta o erro para o campo quantity
      });
    }
  });

export const formSchema = z.object({
  officer: z.object({
    name: z.string().min(1, 'Nome do técnico é obrigatório'),
    secondName: z.string().min(1, 'Nome do segundo técnico é obrigatório'),
    registration: z.string().min(1, 'Matrícula do técnico é obrigatória'),
    secondRegistration: z.string().min(1, 'Matrícula do segundo técnico é obrigatória'),
    city: z.string().min(1, 'Cidade é obrigatória'),
    state: z
      .string()
      .length(2, 'Estado deve ter 2 caracteres')
      .transform((val) => val.toUpperCase()),
    street: z.string().min(1, 'Rua é obrigatória'),
    number: z.string().min(1, 'Número é obrigatório'),
    hood: z.string().min(1, 'Bairro é obrigatório'),
    date: z.string().min(1, 'Data é obrigatória'),
    activity: z.string().min(1, 'Atividade realizada é obrigatória'),
  }),
  materials: z.array(materialSchema).min(1, 'Adicione pelo menos 1 material'),
});

export type FormData = z.infer<typeof formSchema>;
