import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperText]',
  standalone: true
})
export class UpperTextDirective {

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }

}
