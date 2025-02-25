import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  imports: [],
  templateUrl: './page-two.component.html',
  styleUrl: './page-two.component.scss'
})
export class PageTwoComponent implements OnInit {
  value = input('');
  
  ngOnInit(): void {
    console.log(`PageTwoComponent. value=${this.value()}`);
  }

}
