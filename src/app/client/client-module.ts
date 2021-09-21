import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientRoutingModule } from "./client-routing.module";
import { ClientComponent } from "./client.component";
import { CostumerDetailComponent} from "./costumer-detail/costumer-detail.component";

NgModule({
    imports:[
        CommonModule,
        ClientRoutingModule,
    ],
    declarations: [
        ClientComponent,
        CostumerDetailComponent,
    ]
})

export class ClientModule{    
}
