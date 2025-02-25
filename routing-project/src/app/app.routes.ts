import { Routes } from '@angular/router';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SubpageFooComponent } from './components/subpage-foo/subpage-foo.component';
import { SubpageBarComponent } from './components/subpage-bar/subpage-bar.component';
import { hasSupervisorRoleGuard } from './guards/has-supervisor-role.guard';

export const routes: Routes = [
  {
    title: 'Title One',
    path: 'one',
    component: PageOneComponent,
    children: [
      {
        title: 'Subtitle foo',
        path: 'foo',
        component: SubpageFooComponent,
      },
      {
        title: 'Subtitle bar',
        path: 'bar',
        component: SubpageBarComponent,
      },
      {
        title: 'Subtitle bar',
        path: 'bar/:pathVariable',
        component: SubpageBarComponent,
      },
    ],
  },
  {
    title: 'Title Two',
    path: 'two',
    component: PageTwoComponent,
  },
  {
    title: 'Title Two',
    path: 'two/:value',
    component: PageTwoComponent,
  },
  {
    title: 'Lazy',
    path: 'three',
    loadComponent: () =>
      import('./components/page-three/page-three.component').then(
        (c) => c.PageThreeComponent
      ),
    canActivate: [hasSupervisorRoleGuard],
  },
  // {
  //   path: '',
  //   // redirectTo: '/one',
  //   redirectTo: (redirectData) => {
  //     // Can inject any service here
  //     console.debug(redirectData)
  //     return redirectData.queryParams['p'] === '2' ? 'two' : 'one';
  //   },
  //   pathMatch: 'full'
  // },
  {
    title: 'Page not found',
    path: '**',
    component: PageNotFoundComponent,
  },
];
