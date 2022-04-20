/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Assertion type
const body3 = document.querySelector('body') as HTMLBodyElement; //serve para quando você tem certeza que o elemento existe na tela, então você atribui o tipo para poder usar as propriedades daquele tipo
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não recomendado */
// Non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
