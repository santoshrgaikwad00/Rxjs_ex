import { Component, OnInit } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
	obmsg : string;
	videoSubscription : Subscription;
  	constructor(private design: DesignUtilityService) { }

  	ngOnInit(): void {
  		// const boardCastVideo = interval(1000);
  		const boardCastVideo = timer(2000, 1000);

	  	this.videoSubscription = boardCastVideo.subscribe(res=>{
	  		this.obmsg = "Video "+res;
	  		this.design.print('elContainer', this.obmsg);
	  		this.design.print('elContainer2', this.obmsg);
	  		this.design.print('elContainer3', this.obmsg);
	  		if ( res > 4) {
	  			this.videoSubscription.unsubscribe();
	  		}
	  	})
  	}

}
