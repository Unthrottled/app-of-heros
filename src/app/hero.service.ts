/**
 * Created by alex on 6/5/17.
 */

import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService {
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}