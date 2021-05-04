import { Component } from '@angular/core';
import { PricingService } from './pricing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PricingService]
})

export class AppComponent {
  
  constructor(private pricingService : PricingService){
  }

  pricingList = null;
  title = 'stockPricingApp';

  ngOnInit() {
    // load the pricing list on init.
    this.pricingList = this.pricingService.listPricing();
    console.log(this.pricingList);
  }

}
