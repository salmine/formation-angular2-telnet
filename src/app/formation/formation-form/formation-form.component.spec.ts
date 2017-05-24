import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormComponent } from './formation-form.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormationRoutingModule } from "app/formation/formation-routing.module";
import { SharedModule } from "app/shared/shared.module";


describe('FormationFormComponent', () => {
  let component: FormationFormComponent;
  let fixture: ComponentFixture<FormationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormationRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule],
      declarations: [FormationFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
