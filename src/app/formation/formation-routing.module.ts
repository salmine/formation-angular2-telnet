import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationContainerComponent } from 'app/formation/formation-container/formation-container.component';
import { FormationListContainerComponent } from 'app/formation/formation-list-container/formation-list-container.component';

const routes: Routes = [
  {
    path: '', component: FormationContainerComponent, children: [
      { path: 'details/:id', component: FormationDetailsComponent },
      { path: '', component: FormationListContainerComponent },
      { path: 'form/:id', component: FormationFormComponent },
      { path: 'form', component: FormationFormComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
