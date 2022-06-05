import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable, Subject,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {
  
  toggle:number=0;
  private messageSubject = new BehaviorSubject<number>(this.toggle);
  currentMessage=this.messageSubject.asObservable();

  constructor() { }

  changeColor(color:number){
    this.messageSubject.next(color)
  }

  ngOnInit(): void {
  }

}
