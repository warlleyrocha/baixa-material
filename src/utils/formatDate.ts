// Função para formatar data em dd/mm/yyyy
export const formatDate = (dateStr: string) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
};

export function formatDateForLaunch(dateString: string): string {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // meses começam em 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
