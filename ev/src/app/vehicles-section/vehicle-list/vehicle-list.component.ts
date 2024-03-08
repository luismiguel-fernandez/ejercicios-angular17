import { Component, inject } from '@angular/core';
import { VehicleSectionVehicleCardComponent } from '../vehicle-section-vehicle-card/vehicle-section-vehicle-card.component';
import { BdService } from '../../bd.service';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [VehicleSectionVehicleCardComponent],
  templateUrl: './vehicle-list.component.html',
  styles: ``
})
export class VehicleListComponent {

  private db = inject(BdService)

  getVehicles() {
    return this.db.getVehicles()
  }
}
