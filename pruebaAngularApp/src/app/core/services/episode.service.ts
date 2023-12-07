import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Episode } from '../Models/episode.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  // GET (all episodes)
  getEpisodes(query = '', page = 1) {
    const url: string = `${environment.baseUrl}/episode/?name=${query}&page=${page}`;
    return this.http.get<Episode[]>(url);
  }

  // GET (episode detail)
  getEpisodeDetail(id: number) {
    const url: string = `${environment.baseUrl}/episode/${id}`;
    return this.http.get<Episode>(url);
  }
}
