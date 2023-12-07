import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location as loc } from '@app/core/Models/location.model';
import { LocationService } from '@app/core/services/location.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent {
  location: Observable<loc> = of({} as loc);

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private loc: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.location = this.locationService.getLocationDetail(id);
    });
  }

  onBack(): void {
    this.loc.back();
  }
}
