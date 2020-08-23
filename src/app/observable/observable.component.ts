import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../service/demo-service.service';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  intervalSubscription: Subscription;

  constructor(
    private demoServiceService: DemoServiceService
  ) { }

  ngOnInit(): void {
  }

  startIntervalObservable(){
    return interval (1000);
  }

  observableFromInterval(){
    this.intervalSubscription = this.startIntervalObservable().subscribe( data =>{
      console.log(data);
    })
  }

  unsubscribeInterval(){
    this.intervalSubscription.unsubscribe();
  }

  fetchdata() {
    this.demoServiceService.getData().subscribe(data => {
      debugger
    }),error => {
      debugger;
    }
  }
}
