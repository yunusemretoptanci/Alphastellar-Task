import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

isFlex=true;

receiveChildData(data){
  if(data==2){
    this.isFlex=false;
  }else{
    this.isFlex=true;
  }
  }

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
