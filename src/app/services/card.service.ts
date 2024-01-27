import { Card } from "../models/Card";
import { Injectable } from "@angular/core";
import cardData from '../../assets/cards.json';

@Injectable()
export class CardService {
  private cards: Card[] = [];

  constructor(){
    this.cards = cardData;
  }

  getAllCards(){
    return this.cards;
  }

  getCardById(id: number): Card | undefined{
    return this.cards.find(card => card.id === id);
  }

}
