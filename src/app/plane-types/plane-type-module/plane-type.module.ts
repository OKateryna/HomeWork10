import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneTypeService } from '../plane-type.service';
import { PlaneTypeDetailsComponent } from '../plane-type-details/plane-type-details.component';
import { PlaneTypeListComponent } from '../plane-type-list/plane-type-list.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    PlaneTypeDetailsComponent,
    PlaneTypeListComponent
  ],
  providers : [PlaneTypeService]
})
export class PlaneTypeModule { }
