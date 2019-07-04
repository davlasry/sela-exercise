import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  jokes: any;

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.getNewJokes(5, ['nerdy']);
  }

  getNewJokes(limit, categories) {
    this.jokesService.getJokes(limit, categories)
      .subscribe( res => {
          console.log(res);
          this.jokes = res;
        }
      );
  }

}
