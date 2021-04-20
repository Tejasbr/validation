import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

@HostListener('mouseover') mouseOver(){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','black');
  this.renderer.setStyle(this.el.nativeElement, 'color','white');
}

@HostListener('mouseout') mouseOut(){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','blue');
  this.renderer.setStyle(this.el.nativeElement, 'color','yellow');
}

}
