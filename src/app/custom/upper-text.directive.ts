import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUpperText]',
  standalone: true
})
export class UpperTextDirective {

  constructor(private el: ElementRef, private control : NgControl) {

  }

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    let upper = this.el.nativeElement.value.toUpperCase();
    this.control.control?.setValue(upper);
  }

}
