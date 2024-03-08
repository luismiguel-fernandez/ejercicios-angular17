import { Component, inject } from '@angular/core';
import { BdService } from '../bd.service';
import { ManufacturerCardComponent } from './manufacturer-card/manufacturer-card.component';
import { FormsModule } from '@angular/forms';
import { ByNamePipe } from '../by-name.pipe';

@Component({
  selector: 'app-manufacturers-section',
  standalone: true,
  imports: [ManufacturerCardComponent, FormsModule, ByNamePipe],
  templateUrl: './manufacturers-section.component.html',
  styles: ``
})
export class ManufacturersSectionComponent {

  private db = inject(BdService)
  pattern:string = ""

  getManufacturers() {
    return this.db.getManufacturers()
  }

}
