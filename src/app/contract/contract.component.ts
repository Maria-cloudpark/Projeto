import { Component, OnInit } from '@angular/core';
import { contract_results } from '../rest.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  Contract_results: contract_results[] = []
  constructor(
    public rest: RestService,
    private router: Router, 
  ) { }

  ngOnInit(): void {
    this.getcontract_results();
  }

  getcontract_results(): void{
    this.rest.getcontract_results().subscribe((resp: any) => {
      this.Contract_results = resp.results;
      console.log(this.Contract_results)
    });
  }
}
