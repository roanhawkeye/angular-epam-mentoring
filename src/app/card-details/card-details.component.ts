import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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
  @Input()
  card!: Card;

  @Output()
  onBackEmmiter: EventEmitter<boolean> = new EventEmitter();

  backToList(){
    this.onBackEmmiter.emit(false);
  }

}
