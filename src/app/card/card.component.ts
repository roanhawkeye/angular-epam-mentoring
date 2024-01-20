import { Component, Input } from '@angular/core';
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

  constructor(private router: Router){}

  navigateToDetails() {
    this.router.navigateByUrl(`/cards/${this.card.id}`);
  }
}
