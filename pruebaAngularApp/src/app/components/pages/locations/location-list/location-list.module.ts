import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { LocationListComponent } from './location-list.component';

@NgModule({
  declarations: [LocationListComponent],
  imports: [CommonModule, LocationListRoutingModule],
})
export class LocationListModule {}
