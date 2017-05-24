import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationListContainerComponent } from './formation-list-container.component';

describe('FormationListContainerComponent', () => {
  let component: FormationListContainerComponent;
  let fixture: ComponentFixture<FormationListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
