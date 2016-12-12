import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
	templateUrl: "/page2.component.tns.html"
})

export class LazyComponent {
	message: string;

	constructor(route: ActivatedRoute) {
		this.message = route.snapshot.params['id']
	}
}