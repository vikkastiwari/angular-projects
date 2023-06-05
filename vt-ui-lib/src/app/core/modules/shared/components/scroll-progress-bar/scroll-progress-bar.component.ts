import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'pf-scroll-progress-bar',
  templateUrl: './scroll-progress-bar.component.html',
  styleUrls: ['./scroll-progress-bar.component.scss']
})
export class ScrollProgressBarComponent {
  showProgressBar = false;
  scrollProgress = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (winScroll / height) * 100;
    this.showProgressBar = true;

    // if (this.scrollProgress === 101) {
    //   this.showProgressBar = false;
    // }
  }
}
