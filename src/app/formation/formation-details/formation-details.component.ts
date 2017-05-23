import { Component, OnInit } from '@angular/core';
import { Formation } from 'app/shared/models/formation';
import { FormationService } from 'app/shared/services/formation.service';
//detect current RouterModule
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  formations: Array<Formation> = [];
  formation: Formation;
  id: any;
  constructor(private formationService: FormationService, private route: ActivatedRoute) {
    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {

    if (this.id) {
      this.find(this.id);
    }

  }



  find(id) {
    this.formationService.find(id).subscribe(data => {
      this.formation = data;
    });

  }

}
