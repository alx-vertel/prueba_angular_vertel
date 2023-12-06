import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private router: Router) {}

  onSearch(searchValue: string) {
    console.log(searchValue);
    if (searchValue && searchValue.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { value: searchValue },
      });
    }
  }
}
