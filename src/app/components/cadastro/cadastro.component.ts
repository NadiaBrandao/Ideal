import { Component } from '@angular/core';
import { FormularioComponent } from "../formulario/formulario.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent, NgOptimizedImage],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
