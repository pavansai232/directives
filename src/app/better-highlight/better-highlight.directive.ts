import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor : string='transparent';
  @Input() highlightColor : string='blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef:ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor= this.defaultColor;
      //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
  @HostListener('mouseenter') mouseover(eventedata:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor= this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventedata:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','gray')
    this.backgroundColor= this.defaultColor;
}
}
