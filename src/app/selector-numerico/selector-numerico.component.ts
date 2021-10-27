import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {
  @Input() minimo!: string | number;
  @Input() maximo!: string | number;
  actual!: number;

  constructor() { }

  ngOnInit(): void {
    this.maximo = Number(this.maximo);
    this.minimo = Number(this.minimo);
    this.actual = this.minimo;
  }

  incrementar(): void{
    if(this.actual < this.maximo) this.actual ++;
  }

  decrementar(): void{
    if(this.actual > this.minimo) this.actual --;
  }

  fijar(v:number): void{
    if(v>=this.minimo && v<=this.maximo){
      this.actual = v;
    }
  }

}
