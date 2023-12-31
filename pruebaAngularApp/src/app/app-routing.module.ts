import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },
  {
    path: 'character-detail/:id',
    loadChildren: () =>
      import(
        './components/pages/characters/character-detail/character-detail.module'
      ).then((m) => m.CharacterDetailModule),
  },
  {
    path: 'location-detail/:id',
    loadChildren: () =>
      import(
        './components/pages/locations/location-detail/location-detail.module'
      ).then((m) => m.LocationDetailModule),
  },
  {
    path: 'location-list',
    loadChildren: () =>
      import(
        './components/pages/locations/location-list/location-list.module'
      ).then((m) => m.LocationListModule),
  },
  {
    path: 'episode-list',
    loadChildren: () =>
      import(
        './components/pages/episodes/episode-list/episode-list.module'
      ).then((m) => m.EpisodeListModule),
  },
  {
    path: 'episode-detail/:id',
    loadChildren: () =>
      import(
        './components/pages/episodes/episode-detail/episode-detail.module'
      ).then((m) => m.EpisodeDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
