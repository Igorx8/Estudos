export abstract class View<T>{

  //classe abstrata não pode ser instânciada, deve ser implementada

  protected elemento: HTMLElement;

  constructor(seletor: string){
    this.elemento = document.querySelector(seletor)
  }

  abstract template(model: T): string;  //método abstrato se torna obrigatório nas classes filhas

  update(model: T): void{
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}