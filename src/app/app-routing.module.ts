import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerachComponent } from './serach/serach.component';

const routes: Routes = [
  {
    path: 'search',
    component: SerachComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
