import {Injectable} from '@angular/core';
import {Offer} from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offers: Offer[];
  selectedOffer: Offer = new Offer();
  reserveOffer: Offer = new Offer();

  constructor() {
    this.offers = [];
    for (let i = 0; i < 10; i++) {
      this.offers.push(Offer.createRandomOffers());
    }
  }

  addOne(): void {
    const newoffer: Offer = Offer.createRandomOffers();
    this.offers.push(newoffer);
    const id = newoffer.id;
    const status = newoffer.status;
    const valueHighestBid = newoffer.valueHighestBid;
    const description = newoffer.description;
    const title = newoffer.title;
    const sellingdate = newoffer.sellingdate;

    this.selectedOffer.id = id;
    this.selectedOffer.status = status;
    this.selectedOffer.valueHighestBid = valueHighestBid;
    this.selectedOffer.description = description;
    this.selectedOffer.title = title;
    this.selectedOffer.sellingdate = sellingdate;
  }

  edit(obj: Offer): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.offers.length; i++) {
      if (obj.id === this.offers[i].id) {
        console.log('yes sir');
        const title = obj.title;
        const description = obj.description;
        const valueHighestBid = obj.valueHighestBid;
        const status = obj.status;
        const sellingdate = obj.sellingdate;

        this.offers[i].title = title;
        this.offers[i].description = description;
        this.offers[i].valueHighestBid = valueHighestBid;
        this.offers[i].status = status;
        this.offers[i].sellingdate = sellingdate;
      }
    }
  }

  // @ts-ignore
  findAll(): Offer[] {
    return this.offers;
  }

  // @ts-ignore
  findById(eId: number): Offer {
    for (let i = 0; i < 9; i++) {
      if (this.offers[i].id === eId) {
        return this.offers[i];
      }
    }
  }

  // @ts-ignore
  save(offer: Offer): Offer {

  }

  // @ts-ignore
  deleteById(eId: number): AEvent {
    const offer: Offer = this.findById(eId);
    this.offers.splice(this.offers.indexOf(offer), 1);
  }

  // @ts-ignore
  createRandomOfferslist(): AEvent[] {
    this.offers = [];
    for (let i = 0; i < 9; i++) {
      this.offers.push(Offer.createRandomOffers());
    }
  }
}