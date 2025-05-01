import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
