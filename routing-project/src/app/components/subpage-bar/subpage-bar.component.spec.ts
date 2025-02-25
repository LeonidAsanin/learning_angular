import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageBarComponent } from './subpage-bar.component';

describe('SubpageBarComponent', () => {
  let component: SubpageBarComponent;
  let fixture: ComponentFixture<SubpageBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpageBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubpageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
