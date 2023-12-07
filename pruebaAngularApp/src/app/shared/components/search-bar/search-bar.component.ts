import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private router: Router) {}

  onSearch(searchValue: string) {
    const currentRoute = this.router.url;
    console.log(currentRoute);
    if (
      searchValue &&
      searchValue.length > 3 &&
      !currentRoute.includes('/location-list')
    ) {
      this.router.navigate(['/character-list'], {
        queryParams: { value: searchValue },
      });
    } else if (searchValue && searchValue.length > 3) {
      this.router.navigate(['/location-list'], {
        queryParams: { value: searchValue },
      });
    }
  }
}
