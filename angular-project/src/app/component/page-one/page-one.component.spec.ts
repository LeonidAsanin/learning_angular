import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneComponent } from './page-one.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('PageOneComponent', () => {
  let component: PageOneComponent;
  let fixture: ComponentFixture<PageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOneComponent],
      providers: [provideRouter(routes)],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
