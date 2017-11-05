import {inject, TestBed} from '@angular/core/testing';

import {RankingService} from './ranking.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RankingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RankingService]
    });
  });

  it('should be created', inject([RankingService], (service: RankingService) => {
    expect(service).toBeTruthy();
  }));
});
