import { Component, OnInit, Input } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Joke } from 'src/app/models/jokes.model';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  @Input() jokes: Joke[];

  constructor() {}

  ngOnInit() {}
}
