import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleCast]',
})
export class ToggleCastDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.elRef.nativeElement
      .querySelector('.cast-details')
      .classList.toggle('hide');
  }
}
