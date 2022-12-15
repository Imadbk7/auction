import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from '../../services/offers.service';
import {AppComponent} from '../../app.component';
import {Offer, Status} from '../../models/offer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-detail3',
    templateUrl: './detail3.component.html',
    styleUrls: ['./detail3.component.css']
})
export class Detail3Component implements OnInit {

  @Input() editedOfferId: number;
  offersService: OffersService = AppComponent.offerservice;
  keys = Object.keys;
  status = Status;

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  edit() {
    if ((document.getElementById('titleInput') as HTMLInputElement).value === '' ||
      (document.getElementById('statusField') as HTMLSelectElement).value === 'defaultval') {
      alert('Title or status cant be empty');
    }

      else {
      const offer: Offer = new Offer();
      offer.id = this.editedOfferId;
      offer.title = (document.getElementById('titleInput') as HTMLInputElement).value;
      offer.description = (document.getElementById('descriptionInput') as HTMLInputElement).value;
      // tslint:disable-next-line:radix
      offer.valueHighestBid = parseFloat((document.getElementById('highestBidInput') as HTMLInputElement).value);
      if ((document.getElementById('statusField') as HTMLSelectElement).value === Status.NEW){
        offer.status = Status.NEW;
        offer.valueHighestBid = 0;
        this.offersService.selectedOffer.valueHighestBid = 0;
      }
     else if ((document.getElementById('statusField') as HTMLSelectElement).value === Status.CLOSED){
        offer.status = Status.CLOSED;
      }
     else if ((document.getElementById('statusField') as HTMLSelectElement).value === Status.FORSALE){
        offer.status = Status.FORSALE;
      }
    else  if ((document.getElementById('statusField') as HTMLSelectElement).value === Status.PAID){
        offer.status = Status.PAID;
      }
    else  if ((document.getElementById('statusField') as HTMLSelectElement).value === Status.SOLD){
        offer.status = Status.SOLD;
      }

      this.offersService.edit(offer);
      this.toastr.success('Offer is updated! ');

    }

  }

  cancel(): void {
    if (this.offersService.selectedOffer.title !== (document.getElementById('titleInput') as HTMLInputElement).value ||
      this.offersService.selectedOffer.description !== (document.getElementById('descriptionInput') as HTMLInputElement).value ||
      // tslint:disable-next-line:radix
      parseInt(String(this.offersService.selectedOffer.valueHighestBid)) !==
      // tslint:disable-next-line:radix
      parseInt((document.getElementById('highestBidInput') as HTMLInputElement).value)) {

      if (confirm('Are you sure to discard unsaved changes?')) {
        this.offersService.selectedOffer.id = null;
      }
    } else {
    this.offersService.selectedOffer.id = null;
    console.log(this.editedOfferId);
    }
  }


  clear(): void {
    if (this.offersService.selectedOffer.title !== (document.getElementById('titleInput') as HTMLInputElement).value ||
      this.offersService.selectedOffer.description !== (document.getElementById('descriptionInput') as HTMLInputElement).value ||
      // tslint:disable-next-line:radix
      parseInt(String(this.offersService.selectedOffer.valueHighestBid)) !==
      // tslint:disable-next-line:radix
      parseInt((document.getElementById('highestBidInput') as HTMLInputElement).value)) {

      if (confirm('Are you sure to discard unsaved changes?')) {
        (document.getElementById('titleInput') as HTMLInputElement).value = '';
        (document.getElementById('highestBidInput') as HTMLInputElement).value = null;
        (document.getElementById('descriptionInput') as HTMLInputElement).value = '';
      }
    } else {
      (document.getElementById('titleInput') as HTMLInputElement).value = '';
      (document.getElementById('highestBidInput') as HTMLInputElement).value = null;
      (document.getElementById('descriptionInput') as HTMLInputElement).value = '';
      (document.getElementById('statusField') as HTMLSelectElement).value = 'defaultval';

    }
  }

  deleteOffer(): void {
    if (confirm('Are you sure you want to delete offerID ' + this.offersService.selectedOffer.id)) {
      this.offersService.deleteById(this.offersService.selectedOffer.id);
      this.offersService.selectedOffer.id = null;
      this.toastr.success('Offer is deleted! ');

    }
  }


  reset(): void {
    if (this.offersService.selectedOffer.title !== (document.getElementById('titleInput') as HTMLInputElement).value ||
      this.offersService.selectedOffer.description !== (document.getElementById('descriptionInput') as HTMLInputElement).value ||
      // tslint:disable-next-line:radix
      parseInt(String(this.offersService.selectedOffer.valueHighestBid)) !==
      // tslint:disable-next-line:radix
      parseInt((document.getElementById('highestBidInput') as HTMLInputElement).value)) {

      if (confirm('Are you sure to discard unsaved changes?')) {
        (document.getElementById('titleInput') as HTMLInputElement).value = this.offersService.selectedOffer.title;
        (document.getElementById('descriptionInput') as HTMLInputElement).value = this.offersService.selectedOffer.description;
        // tslint:disable-next-line:radix
        (document.getElementById('highestBidInput') as HTMLInputElement).value =
          String(this.offersService.selectedOffer.valueHighestBid);
        (document.getElementById('statusField') as HTMLSelectElement).value =  this.offersService.selectedOffer.status;

      }


    }
    else {     (document.getElementById('titleInput') as HTMLInputElement).value = this.offersService.selectedOffer.title;
               (document.getElementById('descriptionInput') as HTMLInputElement).value =
                 this.offersService.selectedOffer.description;
      // tslint:disable-next-line:radix
               (document.getElementById('highestBidInput') as HTMLInputElement).value =
        String(this.offersService.selectedOffer.valueHighestBid);
               (document.getElementById('statusField') as HTMLSelectElement).value =  this.offersService.selectedOffer.status;


    }
  }
}
