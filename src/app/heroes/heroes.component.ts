import { Component, OnInit } from '@angular/core';
import { Hero } from  '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; // html *ngFor="let hero of heroes"

  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  //  (click)="onSelect(hero)"
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
