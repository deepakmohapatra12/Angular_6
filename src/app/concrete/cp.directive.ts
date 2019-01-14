import { Directive,ElementRef,HostListener,Renderer2, asNativeElements } from '@angular/core';

@Directive({
  selector: '[cp]'
})
export class CpDirective {

  constructor(private eleref:ElementRef,private renderer:Renderer2) { }


}
