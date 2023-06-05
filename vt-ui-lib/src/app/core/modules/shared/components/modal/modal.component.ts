import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showModal = false;
  modalTitle = 'Modal Title';
  modalDescription = 'Modal description goes here.';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
