import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { BListComponent } from './b-list/b-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 


const newLocal = 'Entry';
const routes: Routes = [
  {path: 'Entry', component: EntryPageComponent},
  {path: 'Billing', component: BillingPageComponent},
  {path: 'List', component: BListComponent},
  {path: 'Home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AppComponent, EntryPageComponent, BillingPageComponent , BListComponent];
