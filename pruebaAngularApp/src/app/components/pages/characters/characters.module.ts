import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from '@characters/character-detail/character-detail.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharacterDetailComponent, CharacterListComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharacterDetailComponent, CharacterListComponent],
})
export class CharactersModule {}
