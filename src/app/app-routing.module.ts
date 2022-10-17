import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BPageComponent } from './components/b-page/b-page.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'bookingPage/:id/details',component:DataFormComponent},
  {path:'bookingPage/:id',component:BPageComponent},
  {path:'TicketInfo',component:DataTableComponent},
  {path:'editTicketInfo/:id',component:EditDataComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
