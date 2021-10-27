import { Component, ViewChild } from '@angular/core';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto007';
  @ViewChild('selector1') selector1!: SelectorNumericoComponent;
  @ViewChild('selector2') selector2!: SelectorNumericoComponent;

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }

}
