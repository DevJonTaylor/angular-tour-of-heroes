import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.scss' ]
})

export class HeroesComponent implements OnInit {

  heroes: Array<Hero> = []
  selectedHero?: Hero

  constructor(private messageService: MessageService, private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this
      .heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    if(hero === this.selectedHero || !hero) {
      this.selectedHero = null
      return
    }

    this.selectedHero = hero
    this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`)
  }
}
