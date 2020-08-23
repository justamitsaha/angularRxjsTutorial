import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit {

  subscription : Subscription;
  constructor() { }

  ngOnInit(): void {

    const broadcast = interval(1000);

    // this.subscription = broadcast.subscribe (res =>{
    //   console.log(res);
    // });

    this.subscription = broadcast.pipe(
      map (data => ("Pagla "+data))
    ).subscribe (res =>{
      console.log(res);
    });

    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 10000)
  }

}
