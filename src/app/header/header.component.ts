import { Component, OnInit , Input} from '@angular/core';
import { DataServiceComponent } from '../data-service/data-service.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle:number;

  constructor(private data: DataServiceComponent) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(color=>this.toggle=color)
  }

}
