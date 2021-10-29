import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  elementoBorrado: string ='';

  borrarHeroe(): void {

     //this.heroes.splice(-1,1); //borra el último elemento
     this.elementoBorrado=this.heroes.shift() || ''; //borra el primer elemento
  }
}
