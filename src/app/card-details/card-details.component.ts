import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../models/Card';
import { CardService } from '../services/card.service';
import { CommonModule } from '@angular/common';
import { DecimeterPipe } from '../pipes/decimeter.pipe';
import { HectogramPipe } from '../pipes/hectograms.pipe';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, DecimeterPipe, HectogramPipe],
  providers: [CardService],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})
export class CardDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cardId: number;
  card!: Card;

  constructor(private cardService: CardService){
    this.cardId = Number(this.route.snapshot.params['id']);
    this.card = cardService.getCardById(this.cardId);
  }
}
