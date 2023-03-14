import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CharacterCardComponent
  ]
})
export class CardsModule { }
