import {Injectable} from '@angular/core';
import {Ranking} from './ranking';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RankingService {

  private readonly url = 'http://localhost:8080/rankings';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Ranking[]> {
    return this.httpClient.get<Ranking[]>(this.url);
  }
}
