import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/core/Models/character.model';
import { CharacterService } from '@app/core/services/character.service';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character: Observable<Character> = of({} as Character);

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.character = this.characterService.getCharacterDetail(id);
    });
  }

  onBack(): void {
    this.location.back();
  }
}
