import { Formation } from './../../shared/models/formation';
import { FormationService } from './../../shared/services/formation.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//detect current RouterModule
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  @Input() formations: Array<Formation> = [];
  @Output() onDelete = new EventEmitter();
   formation: Formation;
  constructor(private formationService: FormationService) { 

  }

  ngOnInit() {
  }



  delete(id) {
    this.onDelete.emit(id);
      }

}
