import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PISisRecomendacao';
}

const api = axios.create({
  baseURL: 'https://projetointegrador2025-production-94db.up.railway.app'//'https://localhost:3000'
})

function app(){
  api.get('/usuarios').then((response)=> {
    console.log(response.data)
  })
}
