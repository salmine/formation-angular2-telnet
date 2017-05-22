import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path: 'details/:id', component: FormationDetailsComponent},
  {path : '',component: FormationListComponent},
  {path : 'form/:id',component: FormationFormComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
