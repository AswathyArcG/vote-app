import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './inside/home/home.component';

export const routes: Routes = [{
    path: '',
    component: LoginComponent
},
{
    path: 'app',
    component: HomeComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
