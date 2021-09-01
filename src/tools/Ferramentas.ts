export const MascaraTelefone = (telefone: string) => {
  return telefone
    .toString()
    .replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");
};

export const CapitalizeUP = (text: string) => {
  return text.toUpperCase()
}
