import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '@app/core/Models/episode.model';
import { EpisodeService } from '@app/core/services/episode.service';
import { LocationService } from '@app/core/services/location.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent {
  episodes: Episode[] = [];
  info: RequestInfo = {
    next: null,
  };
  private page = 1;
  private query: string = '';

  constructor(
    private EpisodeService: EpisodeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchEpisode();
  }

  private searchEpisode(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['value'];
      this.getData();
    });
  }

  private getData(): void {
    // Asegurarse de que la lista de locations se vacíe para que no se acumulen en una nueva búsqueda
    this.episodes = [];
    this.EpisodeService.getEpisodes(this.query, this.page)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res.results.length) {
          try {
            console.log('Res -->' + res);
            const { info, results } = res;
            this.episodes = [...this.episodes, ...results];
            this.info = info;
          } catch (error) {
            console.log('Soy' + error);
          }
        } else {
          this.episodes = [];
        }
      });
  }
}

type RequestInfo = {
  next: string | null;
};
