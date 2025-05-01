 import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { Busca1Component } from './busca1/busca1.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cadastro', component: CadastroComponent },
    { path: 'busca', component: Busca1Component }
];