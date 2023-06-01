import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
   public guerrero: Personaje = {
    id: '',
    name: '',
    power: 0
   }
   @Output()
   public EmitirGuerrero: EventEmitter<Personaje> = new EventEmitter;

   DevolverGuerrero(): void{
    console.log(this.guerrero);
    this.EmitirGuerrero.emit(this.guerrero);

    this.guerrero.name='';
    this.guerrero.power=0;
   }

}
