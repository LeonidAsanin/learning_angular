import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormPanelComponent } from './template-driven-form-panel.component';

describe('TemplateDrivenFormPanelComponent', () => {
  let component: TemplateDrivenFormPanelComponent;
  let fixture: ComponentFixture<TemplateDrivenFormPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
