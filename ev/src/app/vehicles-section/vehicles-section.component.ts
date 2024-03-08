import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';

@Component({
  selector: 'app-vehicles-section',
  standalone: true,
  imports: [FiltersComponent, VehicleListComponent],
  templateUrl: './vehicles-section.component.html',
  styles: ``
})
export class VehiclesSectionComponent {

}
