import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CardDTO } from './card/CardDTO';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent {
  title = 'epam-mentoring-angular';
cards: any;

constructor() {
  this.cards = [
      {
        "name": "bulbasaur",
        "id": 1,
        "forms_switchable": false
      },
      {
        "name": "ivysaur",
        "id": 2,
        "forms_switchable": false
      },
      {
        "name": "venusaur",
        "id": 3,
        "forms_switchable": true
      },
      {
        "name": "charmander",
        "id": 4,
        "forms_switchable": false
      },
      {
        "name": "charmeleon",
        "id": 5,
        "forms_switchable": false
      },
      {
        "name": "charizard",
        "id": 6,
        "forms_switchable": true
      }
  ];

}



}
