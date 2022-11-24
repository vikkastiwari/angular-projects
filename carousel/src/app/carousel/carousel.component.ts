import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = [];
  @Input() indicators:boolean = true;
  @Input() controls:boolean = true;
  @Input() autoslide:boolean = false;
  @Input() slideInterval:number = 3000;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.autoslide) this.activateAutoSlide();
  }

  activateAutoSlide():void {
    setInterval(() => {
      this.onNext();
    }, this.slideInterval);
  }

  selectImage(index:number): void{
    this.selectedIndex = index;
  }

  onPrev(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  }

  onNext():void {
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

}
