import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@app/core/Models/location.model';
import { LocationService } from '@app/core/services/location.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent {
  locations: Location[] = [];
  info: RequestInfo = {
    next: null,
  };
  private page = 1;
  private query: string = '';

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchLocation();
  }

  private searchLocation(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['value'];
      this.getData();
    });
  }

  private getData(): void {
    // Asegurarse de que la lista de locations se vacíe para que no se acumulen en una nueva búsqueda
    this.locations = [];
    this.locationService
      .getLocations(this.query, this.page)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res.results.length) {
          try {
            console.log('Res -->' + res);
            const { info, results } = res;
            this.locations = [...this.locations, ...results];
            this.info = info;
          } catch (error) {
            console.log('Soy' + error);
          }
        } else {
          this.locations = [];
        }
      });
  }
}

type RequestInfo = {
  next: string | null;
};
