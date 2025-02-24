import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenderComponent } from './extender.component';

describe('ExtenderComponent', () => {
  let component: ExtenderComponent;
  let fixture: ComponentFixture<ExtenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
