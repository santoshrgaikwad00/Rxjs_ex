import { Component, OnInit } from '@angular/core';
import { of, from }  from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
	obsmsg : any;
	constructor(private design : DesignUtilityService) { }

	ngOnInit(): void {
		// OF EXAMPLES.....
		const obs1 = of("Santosh", "Shweta", "Arati");
		obs1.subscribe(res=>{
			this.design.print('elContainer', res)
		});

		const obs2 = of({ a : "Santosh", b : "Shweta", c : "Arati" });
		obs2.subscribe(res=>{
			this.obsmsg = res;
			// console.log("obsmsg =>", res);
		});

		// FROM Array to observables EXAMPLES.....
		const obs3 = from(["Santosh_from", "Shweta_from", "Arati_from"]);
		obs3.subscribe(res=>{
			this.design.print('elContainer3', res)
		});

		// FROM Promise to observables EXAMPLES.....
		const promise = new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve('Promise resolved ....');
			}, 2000);
		});
		const obs4 = from(promise);
		obs4.subscribe(res=>{
			this.design.print('elContainer4', res)
		});

		// FROM String to observables EXAMPLES.....
		const obs5 = from("WELCOME TO RXJS BOY !!");
		obs5.subscribe(res=>{
			this.design.print('elContainer5', res)
		});
	}

}
