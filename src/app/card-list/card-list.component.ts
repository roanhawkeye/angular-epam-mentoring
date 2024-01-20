import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../models/Card';
import { CardService } from '../services/card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  providers: [CardService],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cards: Card[];

  constructor(private cardService: CardService) {
    this.cards = cardService.getAllCards();
  }
}