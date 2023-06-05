import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  carouselImages: string[] = [
    'https://cdn.pixabay.com/photo/2023/04/26/08/09/porridge-7951848_640.jpg',
    'https://cdn.pixabay.com/photo/2023/05/10/05/56/groom-7983097__340.jpg',
    'https://cdn.pixabay.com/photo/2023/05/20/21/27/tree-8007384__340.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
