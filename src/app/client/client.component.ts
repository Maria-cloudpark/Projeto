import { Component, OnInit } from '@angular/core';
import { client_results } from '../rest.service';
import { RestService} from '../rest.service';
import { Router } from '@angular/router';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  Client_results: client_results[] = [];
  constructor(
    public rest: RestService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getclient_results();
  }

  getclient_results(): void{
    this.rest.getclient_results().subscribe((resp: any) =>{
      this.Client_results = resp.results;
      console.log(this.Client_results)
    });
  }

  abrirDetalheCliente(id: number){
    this.router.navigate(['/costumer-detail', id]);
  }
}
