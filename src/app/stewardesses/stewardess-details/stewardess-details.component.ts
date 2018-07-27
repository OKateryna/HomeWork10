import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../stewardess';
import { StewardessService } from '../stewardess.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css']
})
export class StewardessDetailsComponent implements OnInit {

  stewardess: Stewardess;
  isUpdate = false;

  constructor(public service: StewardessService,private route: ActivatedRoute) {

    const id = parseInt(route.snapshot.paramMap.get('id'));
    service.getStewardess(id).subscribe((data: Stewardess) => {
      this.stewardess = data;
          });
  }

  ngOnInit() {
  }

  updateStewardess(firstName: string , secondName: string,  birthDate: string) {
    if (this.isUpdate === true) {
      return;
    }

    this.isUpdate = true;
    const stewardess = new Stewardess(0, firstName, secondName, birthDate);
    this.service.updateStewardess(this.stewardess.id, stewardess).subscribe();
    this.isUpdate = false;
  }
}
