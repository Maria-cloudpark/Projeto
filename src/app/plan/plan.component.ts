import { Component, OnInit } from '@angular/core';
import { plan_results } from '../rest.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  Plan_results: plan_results[] = []
  constructor(
    public rest: RestService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getplan_results();
  }

  getplan_results(): void{
    this.rest.getplan_results().subscribe((resp: any) => {
      this.Plan_results = resp.results;
      console.log(this.Plan_results)
    });
  }
}
