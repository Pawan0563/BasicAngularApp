import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private element :ElementRef) { 

  }

  @HostListener("mouseenter") mouseEnter(){
    this.changeColor(
      "red"
    )
  }
  @HostListener("mouseleave") mouseLeave(){
    this.changeColor(
null    )
  }
changeColor(color){
  this.element.nativeElement.style.color=color;

}

}
