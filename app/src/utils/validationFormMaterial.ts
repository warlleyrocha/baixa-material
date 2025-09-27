
// utils/validationFormMaterial.ts
import type { FormData } from "../types/formMaterial";

/**
 * Verifica se todos os campos estão preenchidos
 * @param data - Dados do formulário (aceita parciais devido ao useWatch)
 * @returns true se todos os campos estão preenchidos, false caso contrário
 */
export const isFormValid = (data: Partial<FormData>): boolean => {
  // Verifica se data existe
  if (!data) return false;

  // Verifica campos do officer
  const { officer, materials } = data;
  
  if (!officer) return false;
  
  // Verifica se todos os campos do officer estão preenchidos
  const officerFields = ['name', 'registration', 'city', 'state', 'street', 'number', 'hood'] as const;
  const officerValid = officerFields.every(field => {
    const value = officer[field];
    return value !== undefined && value !== null && String(value).trim() !== '';
  });

  if (!officerValid) return false;

  // Verifica se existe pelo menos um material
  if (!materials || !Array.isArray(materials) || materials.length === 0) return false;

  // Verifica se todos os materiais estão preenchidos corretamente
  const materialsValid = materials.every(material => {
    if (!material) return false;
    
    // Verifica campos obrigatórios do material
    const nameValid = material.name && String(material.name).trim() !== '';
    const codeValid = material.code && String(material.code).trim() !== '';
    const quantityValid = material.quantity && 
                         typeof material.quantity === 'number' && 
                         material.quantity > 0;

    return nameValid && codeValid && quantityValid;
  });

  return materialsValid;
};