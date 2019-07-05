import { Component, OnInit } from '@angular/core';
import { JokesService } from './services/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  categories: any;
  activeCategory: string;
  jokes: any[];
  limit: string;

  constructor(private jokesService: JokesService) {
    this.categories = [];
    this.activeCategory = 'all';
    this.limit = '10';
  }

  ngOnInit() {
    this.categories = this.jokesService.getJokesCategories();
    this.getNewJokes('all');
  }

  onClickRefresh() {
    this.getNewJokes(this.activeCategory);
  }

  onLimitChange() {
    this.getNewJokes(this.activeCategory);
  }

  getNewJokes(category) {
    this.activeCategory = category;
    this.jokesService.getJokes(+this.limit, category).subscribe(res => {
      this.jokes = res;
    });
  }
}
