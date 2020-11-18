import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlDemoComponent } from "./ol-demo/ol-demo.component";
import { Page2Component } from "./page2/page2.component";

const routes: Routes = [
  { path: '', redirectTo: '/OlDemo', pathMatch: 'full' },
  { path: 'OlDemo', component: OlDemoComponent },
  { path: 'Page2', component: Page2Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
