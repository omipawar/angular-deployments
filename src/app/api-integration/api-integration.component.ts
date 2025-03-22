import { Component, inject } from '@angular/core';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-api-integration',
  imports: [],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css',
})
export class APIIntegrationComponent {

  products:any[]=[]

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((res: any) => {
      console.log(res);
      this.products = res.products
    });
  }
}
