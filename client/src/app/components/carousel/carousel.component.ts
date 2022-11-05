import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string; // WTF we do with this shit??????/
	@Input() resources:ResourceData[];

  constructor() {}

  ngOnInit() {
  }

}
