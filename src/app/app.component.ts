import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { Card } from './models/Card';
import { CardService } from './services/card.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [CardService],
    imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'epam-mentoring-angular';
  cards: Card[];

  constructor(private cardService: CardService) {
    this.cards = cardService.getAllCards();
  }

}
