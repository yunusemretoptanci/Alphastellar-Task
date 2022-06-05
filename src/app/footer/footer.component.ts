import { Component, OnInit } from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  toggle:number;
  constructor(private data:DataServiceComponent) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(color=>this.toggle=color);
  }

}
