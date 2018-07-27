import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneService } from '../plane.service';
import { PlaneDetailsComponent } from '../plane-details/plane-details.component';
import { PlaneListComponent } from '../plane-list/plane-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaneDetailsComponent,
    PlaneListComponent],
  providers : [PlaneService]
})
export class PlaneModule { }
