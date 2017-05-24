import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationContainerComponent } from './formation-container.component';

describe('FormationContainerComponent', () => {
  let component: FormationContainerComponent;
  let fixture: ComponentFixture<FormationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
