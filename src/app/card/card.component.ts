import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() name = '';
  @Input() image = '';
  @Input() status = '';
  @Input() gender = '';
  @Input() species = '';

}
