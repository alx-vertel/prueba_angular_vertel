import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailComponent } from './episode-detail.component';

const routes: Routes = [{ path: '', component: EpisodeDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeDetailRoutingModule { }
