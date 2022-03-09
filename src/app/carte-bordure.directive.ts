import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCarteBordure]'
})
export class CarteBordureDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = 'red';

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  public setBorder(color: string) {
    const border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
}
