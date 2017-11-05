import {Component, OnInit} from '@angular/core';
import {Ranking} from './ranking';
import {Observable} from 'rxjs/Observable';
import {RankingService} from './ranking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly title = 'Leader Board';
  rankings$: Observable<Ranking[]>;

  constructor(private rankingService: RankingService) {
  }

  ngOnInit(): void {
    this.rankings$ = this.rankingService.findAll();
  }

}
