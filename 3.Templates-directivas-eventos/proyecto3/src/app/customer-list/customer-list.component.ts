import { Component } from '@angular/core';
import { ICustomer } from './models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  //Definir un array de clientes
  customers: ICustomer[] = [
    {
      fullname: "Daniela Estrada",
      email: "daniela@hotmail.com",
      phone: "999999999"
    },
    {
      fullname:"Luis Perez",
      email:"luis@hotmail.com",
      phone:"888888888"
    },
    {
      fullname:"Marcos López",
      email:"marcos@hotmail.com",
      phone:"777777777"
    }
  ]

}
