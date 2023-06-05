import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[customRouterLink]'
})
export class CustomRouterLinkDirective {
  @Input('customRouterLink') route!: string;
  @Input() disabled: boolean = false;

  constructor(private router: Router) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault(); // Prevents the default navigation behavior
    } else {
      this.router.navigateByUrl(this.route);
    }
  }
}
