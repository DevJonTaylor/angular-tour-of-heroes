import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) {}

  msg(msg: string): void {
    this.messageService.add(msg)
  }

  getHeroes(): Observable<Array<Hero>> {
    const heroes = of(HEROES)
    this.msg('HeroService: fetched heroes')
    return heroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => !hero ? false : hero.id === id)

    this.msg(`HeroService: fetched hero id: ${id}`)

    return of(!hero ? null : hero)
  }
}
