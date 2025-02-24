import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormPanelComponent } from "../form-panel/form-panel.component";

@Component({
  selector: 'app-page-one',
  imports: [RouterModule, FormPanelComponent],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.scss',
})
export class PageOneComponent implements OnInit {
  router = inject(Router);
  acticatedRoute = inject(ActivatedRoute);

  param1 = signal('');
  param2 = signal('');

  ngOnInit(): void {
    const param1 = this.acticatedRoute.snapshot.queryParamMap.get('param1');
    this.param1.set(param1 ?? '');

    this.acticatedRoute.queryParamMap.subscribe((queryParamsMap) => {
      this.param2.set(queryParamsMap.get('param2') ?? '');
    });

    const variable = this.acticatedRoute.snapshot.paramMap.get('variable');
    console.log('PageOne variable:', variable);
  }

  redirect() {
    // this.router.navigate(['two']);

    // this.router.navigate(['two'], {
    //   relativeTo: this.acticatedRoute,
    //   queryParams: { param1: false, param2: new Date().getTime() },
    //   queryParamsHandling: 'replace'
    // });
    const param = new Date().getTime();

    this.router.navigate([], {
      relativeTo: this.acticatedRoute,
      queryParams: { param1: param, param2: param },
      queryParamsHandling: 'replace',
    });
  }
}
