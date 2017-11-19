import {Component, OnInit} from '@angular/core';
import {Ranking} from './ranking';
import {RankingService} from './ranking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly title = 'Leader Board';
  rankingName: string;
  rankings: Ranking[];

  constructor(private rankingService: RankingService) {
  }

  ngOnInit(): void {
    this.rankingService.findAll().subscribe(
      (rankings: Ranking[]) => {
        this.rankings = rankings;
      }
    );
  }

  createRanking() {
    this.rankingService.create(this.rankingName).subscribe(
      (ranking) => {
        this.rankings.push(ranking);
        this.rankingName = '';
      },
      () => {
        console.log('Error occurred');
      }
    );
  }

}
