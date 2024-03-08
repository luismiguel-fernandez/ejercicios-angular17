import { Component, Input, inject } from '@angular/core';
import { VehicleCardComponent } from '../../vehicle-card/vehicle-card.component';
import { FavsService } from '../../favs.service';

@Component({
  selector: 'app-garage-section-vehicle-card',
  standalone: true,
  imports: [VehicleCardComponent],
  templateUrl: './garage-section-vehicle-card.component.html',
  styles: ``
})
export class GarageSectionVehicleCardComponent {
  @Input() vehicle:any

  private favs = inject(FavsService)

  delFav(id:string) {
    this.favs.delFav(id)
  }
}
