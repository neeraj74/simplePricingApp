import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  // hard code for now
  pricingList = [
    {
      id: 1,
      name:'MSFT',
      description:'Microsoft Systems',
      openPrice:120,
      closePrice: 121
    },
    {
      id: 2,
      name:'IBM',
      description:'IBM',
      openPrice:11,
      closePrice: 12
    },
    {
      id: 3,
      name:'CSCO',
      description:'Cisco Systems',
      openPrice:123,
      closePrice: 121
    }
  ];

  constructor() { }

  listPricing(){
    return this.pricingList;
  }

  getPricing(id){
    return this.pricingList.find((pricing) => {return pricing.id == id});
  }

}