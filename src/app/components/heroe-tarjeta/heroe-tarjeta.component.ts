import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  // para recibir parametros o propiedades desde el componente padre
  @Input() heroe:any = {};
  @Input() index:number;

  // para enviar eventos o propiedades dsede e componente hjo al padre 
  @Output() heroeSeleccionado: EventEmitter<number>

  constructor( private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index );
    console.log('HEROE SELECCIONADO');
  }

}
