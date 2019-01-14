import { Directive,TemplateRef,ViewContainerRef,Input,ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appMessage]'
})


export class MessageDirective implements AfterViewInit{
  @Input() tcolor : string;
  @Input() tsize : string;
  constructor(private eleRef:ElementRef){}
  ngAfterViewInit():void{
    this.tcolor = this.tcolor || 'green';
    this.tsize = this.tsize || '20px';
    this.eleRef.nativeElement.style.color = this.tcolor;
    this.eleRef.nativeElement.style.fontSize = this.tsize;
  }
}
