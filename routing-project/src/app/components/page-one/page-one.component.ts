import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-one',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.scss'
})
export class PageOneComponent {

}
