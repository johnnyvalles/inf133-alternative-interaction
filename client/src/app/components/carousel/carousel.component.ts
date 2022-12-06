import { Component, OnInit, ViewChild, Input, SimpleChanges, ElementRef } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string;
  @Input() resourceType: string;
	@Input() resources:ResourceData[];
  @Input() gesture: string = "None";
  @ViewChild("carouselPrevious") carouselPrevious: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(this.resourceType);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.resourceType === "artist") {
      if (this.resources && this.gesture.includes("Two Closed Hands")) {
        console.warn("ARTIST: " + this.gesture);
        document.getElementById("carouselNext").click();
      }

      if (this.resources && this.gesture.includes("One Closed Hand")) {
        console.warn("ARTIST: " + this.gesture);
        document.getElementById("carouselPrevious").click();
      }

      if (this.resources && this.gesture.includes("One Hand Open & One Hand Closed")) {
        let currentCard = document.querySelector("#active-carousel-card .carousel-card-link") as HTMLElement;
        if (currentCard) {
          currentCard.click();
        }
      }
    } 

    if (this.resourceType === "album") {
      if (this.resources && this.gesture.includes("Two Closed Hands")) {
        document.getElementById("carouselNext").click();
      }

      if (this.resources && this.gesture.includes("One Closed Hand")) {
        console.warn("ARTIST: " + this.gesture);
        document.getElementById("carouselPrevious").click();
      }

      if (this.resources && this.gesture.includes("One Hand Open & One Hand Closed")) {
        let currentCard = document.querySelector("#active-carousel-card .carousel-card-link") as HTMLElement;
        if (currentCard) {
          currentCard.click();
        }
      }
    }
  }

}
