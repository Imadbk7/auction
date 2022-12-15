import {Component, OnInit, Output} from '@angular/core';
import {Offer} from '../../models/offer.model';

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})
export class Overview2Component implements OnInit {

  public offers: Offer[];
  @Output() selectedOffer: Offer;

  constructor() {
  }

  ngOnInit(): void {
    this.offers = [];

    for (let i = 0; i < 9; i++) {
      this.offers.push(Offer.createRandomOffers());
    }
  }

  addNewOffer(): void{
    this.offers.push(Offer.createRandomOffers());

  }

  onClickOffer(offer: Offer): void {
    if (this.selectedOffer === offer) {
      this.selectedOffer = null;
    } else {
      this.selectedOffer = offer;
      console.log(this.selectedOffer);
    }
  }

  deleteOffer(id: number): void {
    const offer: Offer = this.findOfferId(id);
    this.offers.splice(this.offers.indexOf(offer), 1);
    this.onClickOffer(null);
  }

  // tslint:disable-next-line:typedef
  findOfferId(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i].id === id) {
        return this.offers[i];
      }
    }
    return null;
  }


  // selectedOffer: Offer = new Offer();
  // offersArray: any = new Array();
  //
  //
  // constructor() {
  //   for (let i = 0; i < 8; i++) {
  //     this.createFakeOffers();
  //   }
  // }
  //
  // statusstrings: any = ['New', 'For sale', 'Sold', 'paid', 'Delivered', 'Closed', 'Expired', 'Withdrawn'];
  //
  // ngOnInit(): void {
  // }
  //
  //
  // createFakeOffers(): void {
  //   const fakeOffers: Offer = new Offer();
  //   fakeOffers.id = Math.round(Math.random() * 10);
  //   fakeOffers.status = this.statusstrings[Math.round(Math.random() * 7)];
  //   fakeOffers.sellingdate = 'Maandag';
  //   fakeOffers.title = 'title ' + ' ' + fakeOffers.id;
  //   if (fakeOffers.status === 'New') {
  //   } else {
  //     fakeOffers.valueHighestBid = Math.random() * 100;
  //   }
  //   this.offersArray[this.offersArray.length] = fakeOffers;
  // }
  //
  // onselect(object: Offer): void {
  //   this.selectedOffer = object;
  // }
  //
  //
  // isAofferSelected(): boolean {
  //   if (this.selectedOffer.id != null) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  //
  //
  // deleteOffer(id: number): void {
  //   for (let i = 0; i < this.offersArray.length; i++) {
  //     if (this.offersArray[i].id === id) {
  //       this.offersArray.splice(i, 1);
  //       this.selectedOffer.id = null;
  //       this.selectedOffer.valueHighestBid = null;
  //       this.selectedOffer.title = '';
  //       this.selectedOffer.status = '';
  //       this.selectedOffer.sellingdate = null;
  //     }
  //
  //   }
  //
  //
  // }


}
