import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotDetailsComponent } from '../pilot-details/pilot-details.component';
import { PilotListComponent } from '../pilot-list/pilot-list.component';
import { PilotService } from '../pilot.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PilotDetailsComponent,
    PilotListComponent],
  providers : [PilotService]
})
export class PilotModule { }
