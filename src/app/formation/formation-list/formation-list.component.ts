import { Formation } from './../../shared/models/formation';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit } from '@angular/core';
//detect current RouterModule
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  formations: Array<Formation> = [];
   formation: Formation;
  constructor(private formationService: FormationService) { 

  }

  ngOnInit() {

    this.getFormationList();
  }

  getFormationList() {
    this.formationService.fetch().subscribe(data => {
      this.formations = data;
    });
  }


  delete(id) {
     this.formationService.remove(id).subscribe(data => {
         this.getFormationList() ;

      });

  }

}
