import { Component } from '@angular/core';
import { Mytimer } from './models/mytimer';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOfTimers: Array<Mytimer>;
  stopWatch: Mytimer;

  constructor() {
    this.listOfTimers = [new Mytimer(1), new Mytimer(2), new Mytimer(3)];
    this.stopWatch = new Mytimer(4);
  }

  timerStart(value: Mytimer) {
    value.isWork = true;
    if (value.id !== 4) {
      value.sub$ = interval(1000).subscribe(() => value.myTimer.setSeconds(value.myTimer.getSeconds() + 1));
    } else {
      value.sub$ = interval(10).subscribe(() => value.myTimer.setMilliseconds(value.myTimer.getMilliseconds() + 10));
    }

    timerStop(value: Mytimer){
      value.isWork = false;
      value.sub$.unsubscribe();
    }

    clearTimer(value: Mytimer){
      value.myTimer.setHours(0, 0, 0, 0);
    }
  }
}
