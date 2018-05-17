import { TestBed, inject } from '@angular/core/testing';

import { HeroListService } from './hero-list.service';

describe('HeroListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroListService]
    });
  });

  it('should be created', inject([HeroListService], (service: HeroListService) => {
    expect(service).toBeTruthy();
  }));
});
