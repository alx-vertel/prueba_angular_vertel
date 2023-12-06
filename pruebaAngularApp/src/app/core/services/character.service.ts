import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '@core/Models/character.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  // GET (all characters)
  getCharacters(query = '', page = 1) {
    const url: string = `${environment.baseUrl}/character/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(url);
  }

  // GET (character detail)
  getCharacterDetail(id: number) {
    const url: string = `${environment.baseUrl}/character/${id}`;
    return this.http.get<Character>(url);
  }
}
