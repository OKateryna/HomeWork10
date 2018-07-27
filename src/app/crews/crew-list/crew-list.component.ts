import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';
import { Crew } from '../crew';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  Crews: Array<Crew>;
  lastId: number;

  constructor(public service: CrewService) { }

   ngOnInit() {
    this.getCrews();
  }

  getCrews() {
    this.service.getAllCrews().subscribe((data: Array<Crew>) => {
    this.Crews = data;
    this.lastId = this.Crews[this.Crews.length - 1].id;
    });
  }

  createCrew() {
    const crew = new Crew(0, 'from frontend', null, null);
    this.service.createCrew(crew).subscribe();
    this.lastId += 1;
    crew.id = this.lastId;
    this.Crews.push(crew);
  }

  deleteCrew(id: number) {
    this.service.deleteCrew(id).subscribe();
    this.Crews = this.Crews.filter(e => e.id !== id);
  }

  updateCrew(id: number) {
    const crew = new Crew(0, 'from frontend', null, null);
    this.service.updateCrew(1, crew).subscribe();
    const temp = this.Crews.find(x => x.id === id);
    temp.pilot = crew.pilot;
    temp.stewardesses = crew.stewardesses;
  }

}
