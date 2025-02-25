import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageFooComponent } from './subpage-foo.component';

describe('SubpageFooComponent', () => {
  let component: SubpageFooComponent;
  let fixture: ComponentFixture<SubpageFooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpageFooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubpageFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
