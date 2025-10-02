// utils/textUtils.ts

/**
 * Capitaliza o texto em estilo "Title Case",
 * ignorando palavras comuns como "de", "da", "do" etc.,
 * exceto quando estão no início.
 */
export function smartCapitalize(text: string): string {
  if (!text) return text;

  const ignoreWords = ['de', 'da', 'do', 'das', 'dos', 'em', 'para', 'por', 'a', 'e', 'o'];

  return text
    .split(' ')
    .map((word, index) => {
      if (!word) return word;
      const lower = word.toLowerCase();

      // Primeira palavra sempre capitalizada
      if (index === 0) {
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }

      // Mantém minúsculas palavras ignoradas
      if (ignoreWords.includes(lower)) {
        return lower;
      }

      // Capitaliza as demais
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}
