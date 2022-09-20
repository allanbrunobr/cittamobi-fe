import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictionsListComponent } from '../app/components/predictions-list/predictions-list.component';


const routes: Routes = [
  { path: 'predictions', component: PredictionsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
