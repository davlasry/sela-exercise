import { Component, OnInit, Input } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  @Input() jokes: any;

  constructor(private jokesService: JokesService) {}

  ngOnInit() {}
}
