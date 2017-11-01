import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})



export class HeroesComponent {
  constructor(private heroService: HeroService) { }
  title = 'my learn first';
  title1 = 'my learn first';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
