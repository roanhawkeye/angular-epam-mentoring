import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { Card } from './models/Card';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, CardListComponent, CardDetailsComponent]
})
export class AppComponent {
  title = 'epam-mentoring-angular';
  cardDetailsActivated: boolean;
  currentCard!: Card;

  constructor(){
    this.cardDetailsActivated = false;
  }

  onCardEmmiter(card: Card){
    this.currentCard = card;
    this.cardDetailsActivated = true;
  }

  onBackEmmiter(isCardDetails: boolean){
    this.cardDetailsActivated = isCardDetails;
  }


}
