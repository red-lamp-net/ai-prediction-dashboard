import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixture } from './model.component';
import { FixturesService } from './fixtures.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-fixtures',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './fixtures.component.html',
  styleUrl: './fixtures.component.css',
})
export class FixturesComponent implements OnInit {
  fixtures$!: Observable<Fixture[]>;

  constructor(private fixturesService: FixturesService) {}

  ngOnInit() {
    this.fixtures$ = this.fixturesService.getMatches();
  }
}
