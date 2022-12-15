import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from '../../services/offers.service';
import {Offer} from '../../models/offer.model';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.css']
})
export class Overview3Component implements OnInit {

  @Input() selectedOfferId: number;
  offersService: OffersService = AppComponent.offerservice;


  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  loadOfferTitles(): Offer[] {
    return this.offersService.findAll();
  }

  // @ts-ignore
  createRandomOfferList(): Offer[] {
    this.offersService.createRandomOfferslist();
  }

  // tslint:disable-next-line:typedef no-shadowed-variable
    onClickOffer(offer: Offer) {
    if (this.selectedOfferId === offer.id) {
      this.selectedOfferId = null;
    } else {
      this.selectedOfferId = offer.id;
      console.log(this.selectedOfferId);

      const title =  this.offersService.findById(offer.id).title;
      const id =  this.offersService.findById(offer.id).id;
      const sellingdate = this.offersService.findById(offer.id).sellingdate;
      const description =  this.offersService.findById(offer.id).description;
      const status =  this.offersService.findById(offer.id).status;
      const valueHighestBid = this.offersService.findById(offer.id).valueHighestBid;

      this.offersService.selectedOffer.title = title;
      this.offersService.selectedOffer.id = id;
      this.offersService.selectedOffer.sellingdate = sellingdate;
      this.offersService.selectedOffer.description = description;
      this.offersService.selectedOffer.status = status;
      this.offersService.selectedOffer.valueHighestBid = valueHighestBid;



      this.offersService.reserveOffer.title = title;
      this.offersService.reserveOffer.id = id;
      this.offersService.reserveOffer.sellingdate = sellingdate;
      this.offersService.reserveOffer.description = description;
      this.offersService.reserveOffer.status = status;
      this.offersService.reserveOffer.valueHighestBid = valueHighestBid;
      console.log(this.offersService.offers);

    }
  }


//   offerService: OffersService = new OffersService();
//   hasBeenSelected = false;
//
//   selectedOffer: Offer = new Offer();
//
//
//   constructor() {
//   }
//
//   ngOnInit(): void {
//   }
//
//
//   onselect(offer: Offer): void {
//     console.log(offer);
//     const offerfindbyId: Offer = this.offerService.findById(offer.id);
//     this.selectedOffer.id = offerfindbyId.id;
//     this.selectedOffer.sellingdate = offerfindbyId.sellingdate;
//     this.selectedOffer.title = offerfindbyId.title;
//     this.selectedOffer.status = offerfindbyId.status;
//     this.selectedOffer.valueHighestBid = offerfindbyId.valueHighestBid;
//     this.selectedOffer.description = offerfindbyId.description;
//
//
//   }
//
//
//   clear(): void {
//     if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.selectedOffer.status ||
//       (document.getElementById('titleField') as HTMLInputElement).value !== this.selectedOffer.title ||
//       (document.getElementById('descriptionField') as HTMLInputElement).value !== this.selectedOffer.description ||
//       parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.selectedOffer.valueHighestBid + '',
//         10)
//     ) {
//       if (confirm('Are you sure to discard unsaved changes?')) {
//         console.log(parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10));
//         (document.getElementById('StatusField') as HTMLInputElement).value = '';
//         (document.getElementById('bidField') as HTMLInputElement).value = null;
//         (document.getElementById('titleField') as HTMLInputElement).value = '';
//         (document.getElementById('descriptionField') as HTMLInputElement).value = '';
//       }
//     } else {
//       (document.getElementById('StatusField') as HTMLInputElement).value = '';
//       (document.getElementById('bidField') as HTMLInputElement).value = null;
//       (document.getElementById('titleField') as HTMLInputElement).value = '';
//       (document.getElementById('descriptionField') as HTMLInputElement).value = '';
//     }
//   }
//
//
//   deleteOne(id: number): void {
//     if (confirm('Are you sure you want to delete offerID ' + this.selectedOffer.id)) {
//       this.offerService.deleteOne(id);
//       (document.getElementById('StatusField') as HTMLInputElement).value = '';
//       (document.getElementById('bidField') as HTMLInputElement).value = null;
//       (document.getElementById('titleField') as HTMLInputElement).value = '';
//       (document.getElementById('descriptionField') as HTMLInputElement).value = '';
//
//     } else {
//       console.log('geannuleerd');
//     }
//   }
//
//
//   edit(): void {
//     // tslint:disable-next-line:prefer-for-of
//     for (let i = 0; i < this.offerService.offersArray.length; i++) {
//       if (this.selectedOffer.id === this.offerService.offersArray[i].id) {
//         const newOffer: Offer = new Offer();
//         newOffer.title = (document.getElementById('titleField') as HTMLInputElement).value;
//         newOffer.status = (document.getElementById('StatusField') as HTMLInputElement).value;
//         newOffer.valueHighestBid = parseInt((document.getElementById('bidField') as HTMLInputElement).value, 0);
//         newOffer.sellingdate = this.selectedOffer.sellingdate;
//         newOffer.description = (document.getElementById('descriptionField') as HTMLInputElement).value;
//
//         newOffer.id = this.selectedOffer.id;
//         this.offerService.offersArray[i] = newOffer;
//       }
//     }
//
//
//   }
//
//
//   addNewOffer(): void {
//     this.offerService.createFakeOffers();
//     const newOfferadd: Offer = new Offer();
//     newOfferadd.sellingdate = this.offerService.offersArray[this.offerService.offersArray.length - 1].sellingdate;
//     newOfferadd.status = this.offerService.offersArray[this.offerService.offersArray.length - 1].status;
//     newOfferadd.valueHighestBid = this.offerService.offersArray[this.offerService.offersArray.length - 1].valueHighestBid;
//     newOfferadd.title = this.offerService.offersArray[this.offerService.offersArray.length - 1].title;
//     newOfferadd.description = this.offerService.offersArray[this.offerService.offersArray.length - 1].description;
//     newOfferadd.id = this.offerService.offersArray[this.offerService.offersArray.length - 1].id;
//
//     this.selectedOffer = newOfferadd;
//   }
//
//   cancel(): void {
//     if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.selectedOffer.status ||
//       (document.getElementById('titleField') as HTMLInputElement).value !== this.selectedOffer.title ||
//       (document.getElementById('descriptionField') as HTMLInputElement).value !== this.selectedOffer.description ||
//       parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.selectedOffer.valueHighestBid + '',
//         10)
//     ) {
//       if (confirm('Are you sure to discard unsaved changes?')) {
//         (document.getElementById('StatusField') as HTMLInputElement).value = '';
//         (document.getElementById('bidField') as HTMLInputElement).value = null;
//         (document.getElementById('titleField') as HTMLInputElement).value = '';
//         (document.getElementById('selectedId') as HTMLInputElement).value = '';
//         (document.getElementById('descriptionField') as HTMLInputElement).value = '';
//         this.selectedOffer.id = null;
//       }
//     } else {
//       (document.getElementById('StatusField') as HTMLInputElement).value = '';
//       (document.getElementById('bidField') as HTMLInputElement).value = null;
//       (document.getElementById('titleField') as HTMLInputElement).value = '';
//       (document.getElementById('selectedId') as HTMLInputElement).value = '';
//       (document.getElementById('descriptionField') as HTMLInputElement).value = '';
//       this.selectedOffer.id = null;
//     }
//
//   }
//
//
//   reset(): void {
//     if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.selectedOffer.status ||
//       (document.getElementById('titleField') as HTMLInputElement).value !== this.selectedOffer.title ||
//       (document.getElementById('descriptionField') as HTMLInputElement).value !== this.selectedOffer.description ||
//       parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.selectedOffer.valueHighestBid + '',
//         10)
//     ) {
//       if (confirm('Are you sure to discard unsaved changes?')) {
//         (document.getElementById('titleField') as HTMLInputElement).value = this.selectedOffer.title;
//         (document.getElementById('StatusField') as HTMLInputElement).value = this.selectedOffer.status;
//         (document.getElementById('descriptionField') as HTMLInputElement).value = this.selectedOffer.description;
//         (document.getElementById('bidField') as HTMLInputElement).value = this.selectedOffer.valueHighestBid + '';
//       }
//
//
//     } else {
//       (document.getElementById('titleField') as HTMLInputElement).value = this.selectedOffer.title;
//       (document.getElementById('StatusField') as HTMLInputElement).value = this.selectedOffer.status;
//       (document.getElementById('descriptionField') as HTMLInputElement).value = this.selectedOffer.description;
//       (document.getElementById('bidField') as HTMLInputElement).value = this.selectedOffer.valueHighestBid + '';
//     }
//   }
//
//
// isSelected(): void{
//     this.hasBeenSelected = true;
// }


}
