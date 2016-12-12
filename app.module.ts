import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import {routes} from './app.routes';
import {NativeScriptRouterModule} from 'nativescript-angular';
import {HelloWorldComponent} from './helloWorld/helloWorld.component';

@NgModule({
    declarations: [AppComponent, HelloWorldComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
