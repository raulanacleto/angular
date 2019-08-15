import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3


  //subindo essa parte que esta em painel para app, para conseguir destruir o painel
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('o componente painel foi destruido')
  }

  public testandoMetodo() {
    console.log('teste')
  }

  public atualizaResposta(resposta: Event) {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta() {
    //console.log("Verificar a resposta:" , this.resposta)
    
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      //trocar a pergunta 
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      

      if (this.tentativas === 4) {
        this.encerrarJogo.emit('vitoria')
      }

      //atribui a frase corrente para exibir na view
      this.atualizaRodada()

    } else {
      //diminuir as tentativas
      this.tentativas--

      //na quarta tentativa perde o jogo
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }
  }


  private atualizaRodada(): void {
    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    //limpar a resposta 
    this.resposta = ''
  }

}
