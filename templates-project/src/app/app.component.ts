import { Component } from '@angular/core';
import { BlockComponent } from "./components/block/block.component";
import { PlaygroundComponent } from "./components/playground/playground.component";
import { PipesTestComponent } from "./components/pipes-test/pipes-test.component";
import { LargeComponent } from "./components/large/large.component";

@Component({
  selector: 'app-root',
  imports: [BlockComponent, PlaygroundComponent, PipesTestComponent, LargeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'templates-project';
}
