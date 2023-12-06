import { Component, OnInit } from '@angular/core';
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

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.characterService
      .getCharacters(this.query, this.page)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res.results.length) {
          console.log('Res -->' + res);
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }
      });
  }
}

type RequestInfo = {
  next: string | null;
};
