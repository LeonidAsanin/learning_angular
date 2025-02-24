import { Routes } from '@angular/router';
import { PageOneComponent } from './component/page-one/page-one.component';
import { PageTwoComponent } from './component/page-two/page-two.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { testGuard } from './guards/test.guard';

export const routes: Routes = [
  {
    path: 'one',
    title: 'One',
    component: PageOneComponent,
  },
  {
    path: 'one/:variable',
    title: 'One',
    component: PageOneComponent,
  },
  {
    path: 'two',
    title: 'Two',
    component: PageTwoComponent,
    // canActivate: [testGuard],
  },
  {
    path: '',
    // redirectTo: 'one',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    title: '404',
    component: PageNotFoundComponent,
  },
];
