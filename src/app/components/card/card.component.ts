import { Component, Input } from '@angular/core';
import { PokemonTypeColorPipe } from 'src/app/pipes/pokemon-type-color.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [PokemonTypeColorPipe],
})
export class CardComponent {
  @Input() pokemon: any;
}
