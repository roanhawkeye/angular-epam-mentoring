import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../models/Card';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;
  @Output() cardEmmiter: EventEmitter<Card> = new EventEmitter();

  emitCard(){
    this.cardEmmiter.emit(this.card);
  }

}
