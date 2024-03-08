import { Component, inject } from '@angular/core';
import { BdService } from '../../bd.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styles: ``
})
export class FiltersComponent {

  private db = inject(BdService)

  getManufacturers() { return this.db.getManufacturers() }
  getTechnologies() { return this.db.getTechnologies() }

  setNameFilter(model:string) {

  }
  setMinPriceFilter(min:string) {}
  setMaxPriceFilter(max:string) {}
  setManufacturerFilter(manufacturer:string) {}
  setTechFilter(tech:string) {}

}
