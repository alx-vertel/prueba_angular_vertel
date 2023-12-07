import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from '@app/core/Models/character.model';
import { CharacterService } from '@core/services/character.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  info: RequestInfo = {
    next: null,
  };
  private page = 1;
  private query: string = '';

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchCharacter();
  }

  private searchCharacter(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['value'];
      this.getData();
    });
  }

  private getData(): void {
    // Asegurarse de que la lista de personajes se vacíe para que no se acumulen en una nueva búsqueda
    this.characters = [];
    this.characterService
      .getCharacters(this.query, this.page)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res.results.length) {
          try {
            console.log('Res -->' + res);
            const { info, results } = res;
            this.characters = [...this.characters, ...results];
            this.info = info;
          } catch (error) {
            console.log('Soy' + error);
          }
        } else {
          this.characters = [];
        }
      });
  }
}

type RequestInfo = {
  next: string | null;
};
