import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';
import { CardsModule } from '../../components/cards/cards.module';


@NgModule({
  declarations: [
    CharacterComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CardsModule,
  ]
})
export class CharactersModule { }
