import { Component } from '@angular/core';
import { TemplateDrivenFormPanelComponent } from "../template-driven-form-panel/template-driven-form-panel.component";

@Component({
  selector: 'app-page-two',
  imports: [TemplateDrivenFormPanelComponent],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.scss'
})
export class PageTwoComponent {

}
