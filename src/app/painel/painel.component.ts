import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public progresso: number = 0

  public rodada: number = 0
  public rodadaFrase: Frase
  public tentativas: number = 3

  constructor() { 
    this.atualizaRodada()
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public testandoMetodo(){
    console.log('teste')
  }

  public atualizaResposta(resposta: Event){
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(){
    console.log("Verificar a resposta:" + this.resposta)

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('tradução correta')  
      //trocar a pergunta 
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log("progresso:" + this.progresso)

      //atribui a frase corrente para exibir na view
      this.atualizaRodada()
      
    }else{
      alert('tradução errada')
      //diminuir as tentativas
      this.tentativas--
      
      //na quarta tentativa perde o jogo
      if(this.tentativas === -1){
        alert('voce perdeu todas as tentativas')
      }

    }
    console.log('tentativa:' + this.tentativas)
  }


  private atualizaRodada(): void {
    //define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    //limpar a resposta 
    this.resposta = ''
  }

}
