import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  value = "";

  constructor() { }

  ngOnInit(): void {
  }

  testClicked(){
    console.log("in testclicked function...");
    var promise = new Promise((resolve, reject) => {
      setTimeout( () => {
        console.log("test clicked....");
        this.value = "Testing done..."
        resolve(this.value);
      },2000);
    })
    console.log("before return of promise in testclicked function...");
    return promise;
  }

  async test(){
    console.log("in test function...");
    let value = await this.testClicked();
    console.log("value --- ", value);
    console.log("test value ;- ", this.value);
    console.log("2nd function called");
  }

}

// "node_modules/html2canvas/dist/html2canvas.js"
// "html-to-image": "^1.6.0",
// "html2canvas": "^1.0.0-rc.7",