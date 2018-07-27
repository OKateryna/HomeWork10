import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureService } from '../departure.service';
import { DepartureDetailsComponent } from '../departure-details/departure-details.component';
import { DepartureListComponent } from '../departure-list/departure-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DepartureDetailsComponent,
    DepartureListComponent
  ],
  providers : [DepartureService]
})
export class DepartureModule { }
