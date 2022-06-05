import { Component, OnInit,ViewChild,ElementRef,EventEmitter,Output } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-grid-area',
  templateUrl: './grid-area.component.html',
  styleUrls: ['./grid-area.component.css']
})
export class GridAreaComponent implements OnInit {

  @ViewChild('addText')addText!: ElementRef;
  @ViewChild('addText2')addText2!: ElementRef;
  @ViewChild('addText3')addText3!: ElementRef;
  @ViewChild('addText4')addText4!: ElementRef;

  toggle:number=0;
  
  paint1(){
    this.toggle=1
    this.data.changeColor(1)
  }
  paint2(){
    this.toggle=2
    this.data.changeColor(2)
  }
  paint3(){
    this.toggle=3
    this.data.changeColor(3)
  }
  paint4(){
    this.toggle=4
    this.data.changeColor(4)
  }
  paint5(){
    this.toggle=5
    this.data.changeColor(5)
  }
  paint6(){
    this.toggle=6
    this.data.changeColor(6)
  }
  paint7(){
    this.toggle=7
    this.data.changeColor(7)
  }
  paint8(){
    this.toggle=8
    this.data.changeColor(8)
  }
  paint9(){
    this.toggle=9
    this.data.changeColor(9)
  }
  paint10(){
    this.toggle=10
    this.data.changeColor(10)
  }
  paint11(){
    this.toggle=11
    this.data.changeColor(11)
  }

  clickSubmit : boolean=true;
  clickReset : boolean=true;

  //output to parent for navigation
  @Output() outputFromChild : EventEmitter<number> = new EventEmitter();
  outputNumber : number = 1;

 onSubmit(){
  this.data.changeColor(this.toggle)
  this.outputFromChild.emit(this.outputNumber);
 }

onInput(text:string){
  if(this.addText.nativeElement.value!=""&&this.addText2.nativeElement.value!=""&&this.addText3.nativeElement.value!=""&&this.addText4.nativeElement.value!=""){
    this.clickSubmit=false;
    }else{
      this.clickSubmit=true;
      this.clickReset=true;
    }
    if(this.addText.nativeElement.value!=""||this.addText2.nativeElement.value!=""||this.addText3.nativeElement.value!=""||this.addText4.nativeElement.value!=""){
      this.clickReset=false;
    }
}

 onReset(){
this.data.changeColor(0);
this.clickReset=true;
this.addText.nativeElement.value = "";
this.addText2.nativeElement.value = "";
this.addText3.nativeElement.value = "";
this.addText4.nativeElement.value = "";
this.clickSubmit=true;
}

  constructor(private data:DataServiceComponent) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(color=>this.toggle=color)

    //feature for enable reset with every color choose on navigation
    /* if(this.toggle>0){
      this.clickReset=false
    } */
  }

}
