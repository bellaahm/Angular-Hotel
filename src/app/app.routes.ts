import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { RoomsComponent } from './Components/rooms/rooms.component';
import { FoodPageComponent } from './Components/food-page/food-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'rooms', component: RoomsComponent },
    {path:"dishes",component:FoodPageComponent}
];
