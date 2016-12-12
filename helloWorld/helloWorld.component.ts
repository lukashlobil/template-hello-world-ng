import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
	templateUrl: "/helloWorld.component.tns.html"
})

export class HelloWorldComponent {
	title:string;

	constructor(route: ActivatedRoute) {
		this.title = route.snapshot.params['title'];
	}

	public counter: number = 16;

	public get message(): string {
		if (this.counter > 0) {
			return this.counter + " taps left";
		} else {
			return "Hoorraaay! \nYou are ready to start building!";
		}
	}

	public onTap() {
		this.counter--;
	}

}