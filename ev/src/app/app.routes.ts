import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiclesSectionComponent } from './vehicles-section/vehicles-section.component';
import { ManufacturersSectionComponent } from './manufacturers-section/manufacturers-section.component';
import { YourGarageSectionComponent } from './your-garage-section/your-garage-section.component';
import { Page404Component } from './page404/page404.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent, title: "Home" },
    { path: "vehicles", component: VehiclesSectionComponent, title: "Vehicles" },
    { path: "manufacturers", component: ManufacturersSectionComponent, title: "Manufacturers" },
    { path: "garage", component: YourGarageSectionComponent, title: "Your garage" },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: "**", component: Page404Component, title: "Your garage" }
];
