import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elmRef:ElementRef, private renderer2:Renderer2) { }

  ngOnInit(): void {
    // bad approach
    // this.elmRef.nativeElement.style.backgroundColor = 'green';

    // better approach
    // this.renderer2.setStyle(this.elmRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // console.log(eventData);
    // this.renderer2.setStyle(this.elmRef.nativeElement,'background-color','blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // console.log(eventData);
    // this.renderer2.setStyle(this.elmRef.nativeElement,'background-color','green');
    this.backgroundColor = 'transparent';
  }

  @HostListener('click') mouseclick(eventData:Event){
    console.log(eventData);
    this.renderer2.setStyle(this.elmRef.nativeElement,'background-color','red');
  }
}
