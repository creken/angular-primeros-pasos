import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuidv4 } from 'uuid';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
  public personajes: Personaje[] = [{
    id: uuidv4(),
    name: 'krilin',
    power: 1000
},{
    id: uuidv4(),
    name: 'Goku',
    power: 9500
},{
    id: uuidv4(),
    name: 'Vegeta',
    power: 7500
}];



EscucharGuerrero(guerre: Personaje): void{
    const aux: Personaje = {
        ...guerre
    }
    aux.id = uuidv4();

    
    this.personajes.push(aux);
    
}

EscucharIndex(index: string): void{
    this.personajes=this.personajes.filter( pe => pe.id !== index);
}

  
}
