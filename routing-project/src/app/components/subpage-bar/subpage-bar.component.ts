import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subpage-bar',
  imports: [],
  templateUrl: './subpage-bar.component.html',
  styleUrl: './subpage-bar.component.scss',
})
export class SubpageBarComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const queryParamMap = this.activatedRoute.snapshot.queryParamMap;
    console.log('SubpageBarComponent. Initial. paramMap:', paramMap);
    console.log('SubpageBarComponent. Initial. queryParamMap:', queryParamMap);

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      console.log('SubpageBarComponent. paramMap:', paramMap);
    });
    this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
      console.log('SubpageBarComponent. paramMap:', queryParamMap);
    });
  }

  navigate() {
    // this.router.navigate(['../']);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['./'], {
    //   relativeTo: this.activatedRoute,
    //   queryParams: { param1: 456 },
    // });
  }
}
