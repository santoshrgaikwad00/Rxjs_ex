


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './observables/list/list.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { OfFromComponent } from './observables/of-from/of-from.component';

const routes: Routes = [   	
	{
		path : 'promise',
	    component : PromisesComponent
	},
	{
	    path : 'observables',
	    component : ObservablesComponent,
	    children : [
	    		{ path : '', component : ListComponent },
	    		{ path : 'fromEvent', component : FromEventComponent },
	    		{ path : 'interval', component : IntervalComponent },
	    		{ path : 'of-from', component : OfFromComponent },
	    	] 
	},
	{
		path: '**',
	    redirectTo : 'promise'
	}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
