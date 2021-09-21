import { NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { CostumerDetailComponent } from "./costumer-detail/costumer-detail.component";

const routes: Routes =[
    {
        path: 'client',
        component: ClientComponent,
        data: { title:'Client_Results'}
    },
    {
        path: 'costumer-detail/:id',
        component: CostumerDetailComponent,
        data: {title:'costumer-detail'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ClientRoutingModule{
}
