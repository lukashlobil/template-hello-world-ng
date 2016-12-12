import {Routes} from '@angular/router';
import {HelloWorldComponent} from './helloWorld/helloWorld.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'regularRoute'
	},
	{
		path: 'regularRoute',
		component: HelloWorldComponent,
	},
	{
		path: 'lazy/:id',
		loadChildren: 'lazy/lazy.module#LazyModule',
	}
];