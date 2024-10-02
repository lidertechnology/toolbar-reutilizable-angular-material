import { Component, Input } from '@angular/core';

//Importación de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
//Importación de Angular Material


@Component({
  selector: 'app-tool-bar-r',
  standalone: true,
  imports: [
    //Importación de Angular Material
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule
    //Importación de Angular Material
  ],
  templateUrl: './tool-bar-r.component.html',
  styleUrl: './tool-bar-r.component.css'
})
export class ToolBarRComponent {

  //Uso de Input de Angular Core, donde se pueden ingresar los datos del componente al ser llamado en otro componente.
  @Input() conector: toolbarInterface = {titulo: '', icono: ''};

}

// Interface para controlar la estructura de los datos.
export interface toolbarInterface { 
  titulo: string;
  icono: string;
}
