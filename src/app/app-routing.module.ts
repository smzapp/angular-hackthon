import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServicesCreateComponent } from './components/services-create/services-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'service/create', component: ServicesCreateComponent},
  { path: 'service/:id', component: ServiceDetailsComponent },
  { path: 'providers', component:ProvidersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [HomeComponent, ProvidersComponent,ServiceDetailsComponent, ServicesCreateComponent]
