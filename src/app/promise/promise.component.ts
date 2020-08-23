import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from './../service/demo-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }


  ngOnInit(): void {
  }

  promiseExample() {
    this.promiseWithoutHTTP();
    this.promiseWithHTTP();
  }

  promiseWithoutHTTP(): void {
    let promiseObject = new Promise((success, failure) => {
      let x = this.getResult();
      if (x) {
        success("Promise resolved");
      } else {
        failure("Failure")
      }
    });

    promiseObject.then(res => {
      console.log("Success Data -->" + res);
    }).catch(res => {
      console.log("Failure -->" + res);
    });

  }

  getResult() {
    let x = Math.floor((Math.random() * 10) + 1);
    console.log(x);
    if (x % 2) {
      return true;
    } else {
      return false;
    }
  }



  promiseWithHTTP() {
    let promise = new Promise((resolve, reject) => {
      let apiURL = "http://localhost:4200/assets/data.json";
      this.http.get(apiURL).toPromise().then(data => {
        debugger;
      }).catch(error => {
        debugger;
      });
    });
    return promise;
  }
}
