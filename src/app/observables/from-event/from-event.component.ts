import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

	@ViewChild('addBtn') addBtn : ElementRef;

	constructor(private designUtility : DesignUtilityService) { }

	ngOnInit(): void {	}

	ngAfterViewInit(){
		let count = 1;
		fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
			let val = "SanTa "+count++ 
			this.designUtility.print( 'elContainer', val );
			this.designUtility.print( 'elContainer2', val );
		});
	}

	
}
