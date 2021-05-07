import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

	@ViewChild('addBtn') addBtn : ElementRef;

	constructor() { }

	ngOnInit(): void {
	}

	ngAfterViewInit(){
		let count = 1;
		fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
			let val = "SanTa "+count++ 
			this.print( 'elContainer', val );
			this.print( 'elContainer2', val )
		});
	}

	print(containerid, count){
		let el = document.createElement('li');
		el.innerText = count;

		document.getElementById(containerid).appendChild(el);
	}
}
