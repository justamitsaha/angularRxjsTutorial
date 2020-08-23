import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() { }

  promise;

  ngOnInit(): void {

    this.promise = new Promise((resolve,reject)=>{
      setTimeout ( ()=>{
        console.log("dhus");
      },3000);
    })

    this.normalAsyncFunction();

  }


  //async function always return promise
  async normalAsyncFunction (){
    let respose = await this.promise;
    console.log("phus");
  }

  
}
