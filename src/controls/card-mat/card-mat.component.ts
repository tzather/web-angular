import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'card-mat',
  templateUrl: './card-mat.component.html',
  styleUrls: ['./card-mat.component.scss'],
  imports: [MatCardModule],
})
export class CardMatComponent extends CardComponent {
}
