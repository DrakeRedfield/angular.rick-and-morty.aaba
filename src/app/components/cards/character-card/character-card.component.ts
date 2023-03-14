import { Component, Input } from '@angular/core';
import { ICharacter } from '../../../utils/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() data!: ICharacter;
}
