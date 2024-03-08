import { Component, inject } from '@angular/core';
import { FavsService } from '../favs.service';
import { BdService } from '../bd.service';
import { GarageSectionVehicleCardComponent } from './garage-section-vehicle-card/garage-section-vehicle-card.component';

@Component({
  selector: 'app-your-garage-section',
  standalone: true,
  imports: [GarageSectionVehicleCardComponent],
  templateUrl: './your-garage-section.component.html',
  styles: ``
})
export class YourGarageSectionComponent {

  private favs = inject(FavsService)
  private db = inject(BdService)

  getFavs() {
    return this.favs.getFavs()
  }

  getCarById(id:string) {
    if (this.db.getVehicles())
      return this.db.getCarById(id)
    else return null
  }
}
