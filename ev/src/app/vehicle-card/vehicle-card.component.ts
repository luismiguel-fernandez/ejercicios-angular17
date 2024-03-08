import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styles: ``
})
export class VehicleCardComponent {
  @Input() vehicle:any
}
