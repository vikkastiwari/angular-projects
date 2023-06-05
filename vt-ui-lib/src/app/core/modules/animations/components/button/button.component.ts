import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'vt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('500ms')),
    ]),
  ],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state: 'visible' | 'hidden' = 'visible';

  toggleState() {
    this.state = this.state === 'visible' ? 'hidden' : 'visible';
  }

}
