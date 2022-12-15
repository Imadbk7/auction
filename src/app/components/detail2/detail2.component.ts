import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer, Status} from '../../models/offer.model';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {

  @Input() selectedOffer: Offer;
  @Output() exampleOutput = new EventEmitter<number>();
  keys = Object.keys;
  status = Status;

  constructor() {
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onOfferSelected(id: number): void {
    this.exampleOutput.emit(id);
  }


  // offerService: OffersService = AppComponent.offerservice;
  //
  // constructor() {
  // }
  //
  // ngOnInit(): void {
  // }
  //
  // deleteOne(id: number): void {
  //   if (confirm('Are you sure you want to delete offerID ' + this.offerService.selectedOffer.id)) {
  //     this.offerService.deleteOne(id);
  //     (document.getElementById('StatusField') as HTMLInputElement).value = '';
  //     (document.getElementById('bidField') as HTMLInputElement).value = null;
  //     (document.getElementById('titleField') as HTMLInputElement).value = '';
  //     (document.getElementById('descriptionField') as HTMLInputElement).value = '';
  //
  //   } else {
  //     console.log('geannuleerd');
  //   }
  // }
  //
  //
  // cancel(): void {
  //   if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.offerService.selectedOffer.status ||
  //     (document.getElementById('titleField') as HTMLInputElement).value !== this.offerService.selectedOffer.title ||
  //     (document.getElementById('descriptionField') as HTMLInputElement).value !== this.offerService.selectedOffer.description ||
  //     // tslint:disable-next-line:max-line-length
  //     parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.offerService.selectedOffer.valueHighestBid + '',
  //       10)
  //   ) {
  //     if (confirm('Are you sure to discard unsaved changes?')) {
  //       (document.getElementById('StatusField') as HTMLInputElement).value = '';
  //       (document.getElementById('bidField') as HTMLInputElement).value = null;
  //       (document.getElementById('titleField') as HTMLInputElement).value = '';
  //       (document.getElementById('selectedId') as HTMLInputElement).value = '';
  //       (document.getElementById('descriptionField') as HTMLInputElement).value = '';
  //       this.offerService.selectedOffer.id = null;
  //     }
  //   } else {
  //     (document.getElementById('StatusField') as HTMLInputElement).value = '';
  //     (document.getElementById('bidField') as HTMLInputElement).value = null;
  //     (document.getElementById('titleField') as HTMLInputElement).value = '';
  //     (document.getElementById('selectedId') as HTMLInputElement).value = '';
  //     (document.getElementById('descriptionField') as HTMLInputElement).value = '';
  //     this.offerService.selectedOffer.id = null;
  //   }
  //
  // }
  //
  // clear(): void {
  //   if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.offerService.selectedOffer.status ||
  //     (document.getElementById('titleField') as HTMLInputElement).value !== this.offerService.selectedOffer.title ||
  //     (document.getElementById('descriptionField') as HTMLInputElement).value !== this.offerService.selectedOffer.description ||
  //     // tslint:disable-next-line:max-line-length
  //     parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.offerService.selectedOffer.valueHighestBid + '',
  //       10)
  //   ) {
  //     if (confirm('Are you sure to discard unsaved changes?')) {
  //       console.log(parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10));
  //       (document.getElementById('StatusField') as HTMLInputElement).value = '';
  //       (document.getElementById('bidField') as HTMLInputElement).value = null;
  //       (document.getElementById('titleField') as HTMLInputElement).value = '';
  //       (document.getElementById('descriptionField') as HTMLInputElement).value = '';
  //     }
  //   } else {
  //     (document.getElementById('StatusField') as HTMLInputElement).value = '';
  //     (document.getElementById('bidField') as HTMLInputElement).value = null;
  //     (document.getElementById('titleField') as HTMLInputElement).value = '';
  //     (document.getElementById('descriptionField') as HTMLInputElement).value = '';
  //   }
  // }
  //
  //
  //
  // reset(): void {
  //   if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.offerService.selectedOffer.status ||
  //     (document.getElementById('titleField') as HTMLInputElement).value !== this.offerService.selectedOffer.title ||
  //     (document.getElementById('descriptionField') as HTMLInputElement).value !== this.offerService.selectedOffer.description ||
  //     // tslint:disable-next-line:max-line-length
  //     parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.offerService.selectedOffer.valueHighestBid + '',
  //       10)
  //   ) {
  //     if (confirm('Are you sure to discard unsaved changes?')) {
  //       (document.getElementById('titleField') as HTMLInputElement).value = this.offerService.selectedOffer.title;
  //       (document.getElementById('StatusField') as HTMLInputElement).value = this.offerService.selectedOffer.status;
  //       (document.getElementById('descriptionField') as HTMLInputElement).value = this.offerService.selectedOffer.description;
  //       (document.getElementById('bidField') as HTMLInputElement).value = this.offerService.selectedOffer.valueHighestBid + '';
  //     }
  //
  //
  //   } else {
  //     (document.getElementById('titleField') as HTMLInputElement).value = this.offerService.selectedOffer.title;
  //     (document.getElementById('StatusField') as HTMLInputElement).value = this.offerService.selectedOffer.status;
  //     (document.getElementById('descriptionField') as HTMLInputElement).value = this.offerService.selectedOffer.description;
  //     (document.getElementById('bidField') as HTMLInputElement).value = this.offerService.selectedOffer.valueHighestBid + '';
  //   }
  // }
  //
  // edit(): void {
  //   // tslint:disable-next-line:prefer-for-of
  //   for (let i = 0; i < this.offerService.offersArray.length; i++) {
  //     if (this.offerService.selectedOffer.id === this.offerService.offersArray[i].id) {
  //       const newOffer: Offer = new Offer();
  //       newOffer.title = (document.getElementById('titleField') as HTMLInputElement).value;
  //       newOffer.status = (document.getElementById('StatusField') as HTMLInputElement).value;
  //       newOffer.valueHighestBid = parseInt((document.getElementById('bidField') as HTMLInputElement).value, 0);
  //       newOffer.sellingdate = this.offerService.selectedOffer.sellingdate;
  //       newOffer.description = (document.getElementById('descriptionField') as HTMLInputElement).value;
  //
  //       newOffer.id = this.offerService.selectedOffer.id;
  //       this.offerService.offersArray[i] = newOffer;
  //     }
  //   }
  // }

}
