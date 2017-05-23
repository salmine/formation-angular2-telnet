import { ActivatedRoute } from '@angular/router';

import { FormationService } from './../../shared/services/formation.service';
import { Formation } from './../../shared/models/formation';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';




@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit, OnDestroy {
  id: any;
  formation: Formation;
  sub: Array<Subscription> = [];
  formations: Array<Formation> = [];
  constructor(private formationService: FormationService, private route: ActivatedRoute) {

    const sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.find(this.id);
      }
    });
  }

  ngOnInit() {
    this.formation = new Formation();
    this.formation.title = 'New Title';
    this.formation.description = 'New Description';


  }

    find(id) {
    this.formationService.find(id).subscribe(data => {
      this.formation = data;
    });

  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.map(d => {
        d.unsubscribe();
      });
    }
  }



  add(form: NgForm) {


    console.log(form.value);

    let model: Formation = new Formation();
    const title = form.value.title;
    const description = form.value.description;
    model.title = title;
    model.description = description;
    if (this.id) {
      this.formation.id = this.id;
      this.update(this.id, this.formation);
    } else {
      this.saveService(this.formation);
    }
    //call database
    form.reset();
  }

  saveService(model) {
    let sub = this.formationService.save(model).subscribe(data => {
      this.formationService.fetch().subscribe(datafetched => {
        this.formations = datafetched;
      });
    });
    this.sub.push(sub);
  }

  update(id, model) {


    const sub = this.formationService.put(this.id, model).subscribe(data => {

      this.formation = data;

    });
    this.sub.push(sub);

  }
}
