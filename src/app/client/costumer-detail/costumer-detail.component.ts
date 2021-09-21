import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { detail } from 'src/app/rest.service';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-costumer-detail',
  templateUrl: './costumer-detail.component.html',
  styleUrls: ['./costumer-detail.component.css']
})
export class CostumerDetailComponent implements OnInit {
  
  detail: detail[] = [];
  idAtual: any
  constructor(
    private route: ActivatedRoute,
    public rest: RestService,) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (objeto) => {
      this.idAtual = objeto.id;
      this.idAtual = +objeto['id']; 
      this.getdetail(this.idAtual);
    })
    
  }

  trataResult(result : any){    

    this.detail[0] = {
      id: result["id"],
      name: result["name"],
      blocked: result["blocked"],
      blocked_reason: result["blocked_reason"],
      vehicle_set: result["vehicle_set"],
      cpf: result["cpf"],
      phone: result["phone"],
      email: result["email"],
      is_hourly: result["is_hourly"],
      apartment: result["apartment"],
      cnh_number: result["cnh_number"],
      id_number: result["id_number"],
      address: result["address"],
      due_date: result["due_date"],
      access_count: result["access_count"],
      plan_id: result["plan_id"],
      plan_name: result["plan_name"],
      plan_kind: result["plan_kind"],
      latest_plan_transaction_id: result["latest_plan_transaction_id"],
      expiry_date: result["expiry_date"],
      insurance_expiration: result["insurance_expiration"],
      prepaid_balance: result["prepaid_balance"],
      places_count: result["places_count"],
      pending_daily_count: result["pending_daily_count"]
    }

    return this.detail
  }

  getdetail(idAtual: any): void{
    this.rest.getdetail(idAtual).subscribe((resp: any) =>{                        
      this.detail = this.trataResult(resp) as detail[]
      console.log(this.detail);
    })
  }
  

}
