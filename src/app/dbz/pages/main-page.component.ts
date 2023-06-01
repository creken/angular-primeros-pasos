import { Component } from "@angular/core";
import { DbzService } from "../services/dbz-service.service";
import { Personaje } from "../interfaces/personaje.interface";

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
 
 constructor( public dbzService: DbzService){}

 get personajes(): Personaje[]{
    return [...this.dbzService.personajes]
 }

public eliminar(id: string): void{
    this.dbzService.EscucharIndex(id);
}

public agregar(persona: Personaje): void{
    this.dbzService.EscucharGuerrero(persona);
}

}