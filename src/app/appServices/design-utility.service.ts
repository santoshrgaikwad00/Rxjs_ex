import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  	constructor() { }

  	print(containerid, count){
		let el = document.createElement('li');
		el.innerText = count;

		document.getElementById(containerid).appendChild(el);
	}
}
