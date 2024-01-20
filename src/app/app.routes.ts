import { Routes } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailsComponent } from './card-details/card-details.component';

export const routes: Routes = [
  {path: 'cards', component: CardListComponent },
  {path: 'cards/:id', component: CardDetailsComponent},
  {path: '', redirectTo: '/cards', pathMatch: 'full' }
];
