import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '../Models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  // GET (all locations)
  getLocations(query = '', page = 1) {
    const url: string = `${environment.baseUrl}/location/?name=${query}&page=${page}`;
    return this.http.get<Location[]>(url);
  }

  // GET (location detail)
  getLocationDetail(id: number) {
    const url: string = `${environment.baseUrl}/location/${id}`;
    return this.http.get<Location>(url);
  }
}
