import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { PredictionEvent } from "../../prediction-event"


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  gesture: string = "";
  @ViewChild("handTracker") handTracker;
  constructor() { }

  ngOnInit() {
  }

  onPrediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
  }

  ngOnDestroy() {
    this.handTracker.stopDetection();
  }
}
