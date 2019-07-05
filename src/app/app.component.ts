import { Component, OnInit } from '@angular/core';
import { JokesService } from './services/jokes.service';
import { Joke } from './models/jokes.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  categories: Observable<string[]>;
  activeCategory: string;
  jokes: Joke[];
  limit: string;

  constructor(private jokesService: JokesService) {
    this.activeCategory = 'all';
    this.limit = '10';
  }

  ngOnInit() {
    this.categories = this.jokesService.getJokesCategories();
    this.getNewJokes('all');
  }

  onClickRefresh(): void {
    this.getNewJokes(this.activeCategory);
  }

  onLimitChange(): void {
    this.getNewJokes(this.activeCategory);
  }

  getNewJokes(category) {
    this.activeCategory = category;
    this.jokesService.getJokes(+this.limit, category).subscribe(res => {
      this.jokes = res;
    });
  }
}
