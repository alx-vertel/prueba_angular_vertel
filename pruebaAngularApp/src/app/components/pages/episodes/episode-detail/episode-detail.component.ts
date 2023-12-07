import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '@app/core/Models/episode.model';
import { EpisodeService } from '@app/core/services/episode.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent {
  episode: Observable<Episode> = of({} as Episode);

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.episode = this.episodeService.getEpisodeDetail(id);
    });
  }

  onBack(): void {
    this.location.back();
  }
}
