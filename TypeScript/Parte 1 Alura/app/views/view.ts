export abstract class View<T>{

  //classe abstrata não pode ser instânciada, deve ser implementada

  protected elemento: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean){
    this.elemento = document.querySelector(seletor)
    if(escapar){
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;  //método abstrato se torna obrigatório nas classes filhas

  public update(model: T): void{
    let template = this.template(model);
    if(this.escapar){
      template = template.replace(/<script>[\s\S]*?<\/script>/, ''); //expressão regular que remove a tag script, para segurança
    }
    this.elemento.innerHTML = template;
  }
}