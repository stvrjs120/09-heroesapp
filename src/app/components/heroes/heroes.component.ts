import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading = false;

  constructor(private _heroesService: HeroesService) {

    this.loading = true;
    this._heroesService.getHeroes()
      .subscribe(data => {
        // setTimeout(() => {
          this.loading = false;
          this.heroes = data;
        // }, 1000);
      });
  }

  ngOnInit() {
  }

  borraHeroe(key$: string) {
    this._heroesService.borraHeroe(key$)
      .subscribe(respuesta => {
        if (respuesta) {
          console.error(respuesta);
        } else {
          delete this.heroes[key$];
        }
      });
  }

}
