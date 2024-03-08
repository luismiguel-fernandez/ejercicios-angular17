import { Component, Input, inject } from '@angular/core';
import { VehicleCardComponent } from '../../vehicle-card/vehicle-card.component';
import { FavsService } from '../../favs.service';

@Component({
  selector: 'app-vehicle-section-vehicle-card',
  standalone: true,
  imports: [VehicleCardComponent],
  templateUrl: './vehicle-section-vehicle-card.component.html',
  styles: ``
})
export class VehicleSectionVehicleCardComponent {
  @Input() vehicle:any
  
  private favs = inject(FavsService)

  addFav(id:string) {
    this.favs.addFav(id)
  }
  delFav(id:string) {
    this.favs.delFav(id)
  }
  isFav(id:string) {
    return this.favs.isFav(id)
  }

}
