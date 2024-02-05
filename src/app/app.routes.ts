import { Routes } from '@angular/router';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { HeroesManagementPageComponent } from './pages/heroes-management-page/heroes-management-page.component';
import { CREATE_MODE, EDIT_MODE } from './models/heroe.model';

export const routes: Routes = [
    { path: 'heroes', component: HeroesListPageComponent },
    { path: `${ CREATE_MODE }/:newId`, component: HeroesManagementPageComponent},
    { path: `${ EDIT_MODE }/:heroeId`, component: HeroesManagementPageComponent},
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];
