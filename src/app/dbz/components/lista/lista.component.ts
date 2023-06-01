import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {


@Input()
 public ListaPersonaje: Personaje[] = [{
  id: '',
  name: 'pikoro',
  power: 4500 
 }];

 @Output()
 public indexEliminar: EventEmitter<string> = new EventEmitter;

EliminarGuerrero(index:string):void{
 console.log(index);
 //
 this.indexEliminar.emit(index);
}
}
