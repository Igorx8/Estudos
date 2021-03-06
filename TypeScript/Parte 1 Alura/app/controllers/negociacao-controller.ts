import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from '../views/mensagem-view.js';
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor(){
    this.inputData = document.querySelector('#data') as HTMLInputElement;
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = <HTMLInputElement> document.querySelector('#valor');    //<HTMLInputElement> é outra forma de declarar o 'as'
    this.negociacoesView.update(this.negociacoes);
  }

  @logarTempoDeExecucao()
  public adiciona(): void{
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if(this.ehDiaUtil(negociacao.data)){
      this.negociacoes.adiciona(negociacao);
      this.limparFormulario();
      this.atualizaView();
    }
    else{
      this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
    }

  }

  private ehDiaUtil(data: Date){
    return data.getDay() > DiasDaSemana.DOMINGO 
    && data.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void{
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
    // this.inputData.style.backgroundColor = 'blue';
  }

  private atualizaView(): void{
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update('Negociação adicionada com sucesso!')
  }
}