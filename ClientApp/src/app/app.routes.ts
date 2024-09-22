import { Routes } from '@angular/router';
import { HomePageComponent } from './components/user-side/home-page/home-page.component';
import { LoginComponent } from './components/user-side/login/login.component';
import { RegisterComponent } from './components/user-side/register/register.component';
import { EventListComponent } from './components/user-side/event/event-list/event-list.component';


export const routes: Routes = [
    {
        path:"",
        component:HomePageComponent
    },

    {
        path:"home-page",
        component:HomePageComponent
    },

    {
        path:"login",
        component:LoginComponent
    },

    {
        path:"register-page",
        component:RegisterComponent
    },

    {
        path:"event",
        component:EventListComponent
    }
];
