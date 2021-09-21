import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovimentoComponent } from './movimento/movimento.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { PlanComponent } from './plan/plan.component';
import { ContractComponent } from './contract/contract.component';
import { CostumerDetailComponent } from './client/costumer-detail/costumer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovimentoComponent,
    ClientComponent,
    PlanComponent,
    ContractComponent,
    CostumerDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }