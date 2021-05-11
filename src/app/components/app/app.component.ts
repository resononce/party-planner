import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'party-planner';
  array = [1,2,3,4,5,6,7,8,9,10]
  constructor(){
    this.sort(this.array, this.array.length);
  }

  sort(A: Array<number>, n: number ): Array<number> {
    var count = 0;
    var j = 0;
    while(j < n-1){
      var k = 0;
      while(k < n-j-1 ){
        if(A[k] < A[k+1]){
          console.log(A.toString());
          [A[k], A[k+1]] = [A[k+1], A[k]];
          count++;
        }
        k++;
      }
      j++;
    }
    console.log(count);
    return A;
  }
}
