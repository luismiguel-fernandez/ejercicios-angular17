import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styles: `
    #titulo { display: flex; align-self: flex-end; }
    .content { text-align: center; }
  `
})
export class HeaderComponent {

}
