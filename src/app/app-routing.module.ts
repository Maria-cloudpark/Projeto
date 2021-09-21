import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { PlanComponent } from './plan/plan.component';
import { ContractComponent } from './contract/contract.component';
import { CostumerDetailComponent } from './client/costumer-detail/costumer-detail.component';

const routes: Routes = [
  {
  path: 'movimento',
  component: MovimentoComponent,
  data: { title: 'Movimento List' }
  },

  {
    path: 'client',
    component: ClientComponent,
    data: { title:'Client_Results'}
  },
  {
    path: 'plan',
    component: PlanComponent,
    data: {title:'Plan_Results'}
  },
  {
    path: 'contract',
    component: ContractComponent,
    data:{ title:'Contract_Results'}
  },
  {
    path: 'costumer-detail/:id',
    component: CostumerDetailComponent,
    data: {title:'costumer-detail'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
