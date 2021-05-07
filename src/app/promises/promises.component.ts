import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
	
	data : any;
	dell = {brand : 'Dell', hdd : '2TB', color : 'black'};
	hp = {brand : 'Hp', hdd : '3TB', color : 'silver'};
	not = {brand : 'Not available', color : 'black'};

	constructor() { }

	ngOnInit(): void {
	  	let buyLaptop = new Promise((resolve, reject)=>{
	  		if(this.DellAvailable()){
	  			return setTimeout(()=>{
					resolve(this.dell)	
				}, 3000);
	  		} else if(this.HpAvailable()){
	  			return setTimeout(()=>{
					resolve(this.hp)	
				}, 3000);
	  		}else {
	  			return setTimeout(()=>{
					reject(this.not)	
				}, 3000);
	  		}
	  		
	  	});

	  	buyLaptop.then((res)=> {
	  		console.log(res);
	  		this.data = res;
	  	}).catch((err)=>{
	  		console.log(err);
	  		this.data = err;
	  	})
	}

	DellAvailable(){
		return true;
	}

	HpAvailable(){
		return false;
	}

}
