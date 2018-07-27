import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewService } from '../crew.service';
import { CrewListComponent } from '../crew-list/crew-list.component';
import { CrewDetailsComponent } from '../crew-details/crew-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CrewListComponent,
    CrewDetailsComponent
  ],
  providers : [CrewService]
})
export class CrewModule { }
