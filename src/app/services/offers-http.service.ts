import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offer} from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersHttpService {

  constructor(private httpclient: HttpClient) {
    this.getOffers();
  }

  public offersArray: Offer[] = [];
  statusstrings: any = ['New', 'For sale', 'Sold', 'paid', 'Delivered', 'Closed', 'Expired', 'Withdrawn'];
  selectedOffer: Offer = new Offer();
  hasBeenSelected = false;

  getOffers(): void {
    this.httpclient.get<any>('http://localhost:8085/offers').subscribe((data) => {
        this.offersArray = data;
        console.log(this.offersArray);
      }
    );
  }

  edit(offer: Offer): void {
    this.httpclient.put('http://localhost:8085/offers/' + offer.id, offer).subscribe(
      () => this.getOffers()
    );
  }

  deleteOne(id: number): void {
    this.httpclient.delete('http://localhost:8085/offers/' + id).subscribe(
      () => this.getOffers()
    );
  }

  onselect(offer: Offer): void {
    this.selectedOffer = offer;
  }

  findById(id: number): Offer {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.offersArray.length; i++) {
      if (id === this.offersArray[i].id) {
        return this.offersArray[i];
      }
    }
  }

  createFakeOffers(): void {
    this.httpclient.get<any>('http://localhost:8085/offers/createFakeOffer').subscribe(
      () => {
        this.getOffers();
        setTimeout(() => {
          const newOfferadd: Offer = new Offer();
          newOfferadd.sellingdate = this.offersArray[this.offersArray.length - 1].sellingdate;
          newOfferadd.status = this.offersArray[this.offersArray.length - 1].status;
          newOfferadd.valueHighestBid = this.offersArray[this.offersArray.length - 1].valueHighestBid;
          newOfferadd.title = this.offersArray[this.offersArray.length - 1].title;
          newOfferadd.description = this.offersArray[this.offersArray.length - 1].description;
          newOfferadd.id = this.offersArray[this.offersArray.length - 1].id;

          this.selectedOffer = newOfferadd;
          console.log(this.offersArray.length);
          this.hasBeenSelected = true;
        }, 500);
      }
    );
  }

  isSelected(): void {
    this.hasBeenSelected = true;
  }

}
