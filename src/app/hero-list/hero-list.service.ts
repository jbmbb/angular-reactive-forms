import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

import { Hero, heroes } from '../data-model';

@Injectable()
export class HeroListService {

  delayMs = 500;

  getHeroes(): Observable<Hero[]> {
    return of(heroes).pipe(delay(this.delayMs));
  }

  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero); // Demo: mutate cached hero
    return of(newHero).pipe(delay(this.delayMs)); // simulate latency with delay
  }
}
