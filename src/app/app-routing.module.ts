import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvmeComponent } from './ivme/ivme.component';
import { IvmeBirComponent } from './ivmeBir/ivmeBir.component';
import { IvmeIkiComponent } from './ivmeIki/ivmeIki.component';

const routes: Routes = [

  {path:'ivme',component:IvmeComponent},

  {path:'ivmeBir',component:IvmeBirComponent},
  {path:'ivmeIki',component:IvmeIkiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
