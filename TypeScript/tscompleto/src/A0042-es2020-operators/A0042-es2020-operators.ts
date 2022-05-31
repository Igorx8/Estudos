//Encadeamento opcional e operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O título',
  texto: 'O texto',
  // data: new Date()
}

console.log(documento.data?.toDateString()); //encadeamento opcional
console.log(documento.data?.toDateString() ?? 'Ixi, não existe data'); //operador de coalescência nula, caso o dado seja undefined ou null ele retorna o que for definido após o ??
console.log(undefined ?? 'Ixi 2, não existe data');
console.log(null ?? 'Ixi 3, não existe data');
