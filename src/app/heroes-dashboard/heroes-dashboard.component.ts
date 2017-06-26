import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent implements OnInit {
  heroes: Hero[]

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5))
  }
}
