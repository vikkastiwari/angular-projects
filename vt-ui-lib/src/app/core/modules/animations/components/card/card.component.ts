import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'vt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidden', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition('visible <=> hidden', animate('900ms ease-out')),
    ]),
  ],

})
export class CardComponent implements OnInit {

  state: 'visible' | 'hidden' = 'visible';

  constructor() { }

  ngOnInit(): void {
  }

  toggleState() {
    this.state = this.state === 'visible' ? 'hidden' : 'visible';
  }
}
