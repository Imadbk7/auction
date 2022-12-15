import { Component, OnInit } from '@angular/core';
import {Offer} from '../../models/offer.model';

@Component({
  selector: 'app-fakeoffers',
  templateUrl: './fakeoffers.component.html',
  styleUrls: ['./fakeoffers.component.css']
})
export class FakeoffersComponent implements OnInit {

  public offers: Offer[];

  constructor() {
  }

  ngOnInit(): void {
    this.offers = [];

    for (let i = 0; i < 9; i++) {
      this.offers.push(Offer.createRandomOffers());
    }
  }




// offersArray: any[] = [];
// statusstrings: any = ['sold', 'For sale', 'New', 'paid', 'closed'];
//
//   constructor() {
//     for (let i = 0; i < 7; i++) {
//       this.createFakeOffers();
//     }
//   }
//
//   ngOnInit(): void {
//   }
//
//   createFakeOffers(): void{
//   const fakeOffers: Offer = new Offer();
//   fakeOffers.id = Math.round(Math.random() * 10);
//   fakeOffers.status = this.statusstrings[Math.round(Math.random() * 4)];
//   fakeOffers.sellingdate = 'Maandag';
//   fakeOffers.title = 'Title ' + fakeOffers.id ;
//   if (fakeOffers.status === 'New'){
//   }
//   else {
//   fakeOffers.valueHighestBid = Math.random() * 100; }
//   this.offersArray[this.offersArray.length] = fakeOffers;
// }







}
