import { Component, OnInit } from '@angular/core';
import { RestService, movimento} from '../rest.service';
import { Router } from '@angular/router';


//------------------Dados-veiculos-no-pátio-----------------------
@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.component.html',
  styleUrls: ['./movimento.component.css']
})
export class MovimentoComponent implements OnInit {

  Movimento: movimento[] = [];

  constructor(
    public rest: RestService,
    private router: Router) { }

  ngOnInit(): void {
    this.getmovimentos();
  }

  getmovimentos(): void {
    this.rest.getmovimentos().subscribe((resp: any) => {
      this.Movimento = resp.results;
      console.log(this.Movimento);
    });
  }
}