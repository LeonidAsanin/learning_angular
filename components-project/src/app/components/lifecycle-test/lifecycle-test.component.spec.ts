import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleTestComponent } from './lifecycle-test.component';

describe('LifecycleTestComponent', () => {
  let component: LifecycleTestComponent;
  let fixture: ComponentFixture<LifecycleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
