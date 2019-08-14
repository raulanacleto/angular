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
  public resposta: string

  constructor() { }

  ngOnInit() {
  }

  public testandoMetodo(){
    console.log('teste')
  }

  public atualizaResposta(resposta: Event){
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }
}
