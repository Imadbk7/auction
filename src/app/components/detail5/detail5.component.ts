import {Component, OnInit} from '@angular/core';
import {Offer, Status} from '../../models/offer.model';
import {OffersHttpService} from '../../services/offers-http.service';

@Component({
  selector: 'app-detail5',
  templateUrl: './detail5.component.html',
  styleUrls: ['./detail5.component.css']
})
export class Detail5Component implements OnInit {

  constructor(public httpservice: OffersHttpService) {
  }

  ngOnInit(): void {
  }

  deleteOne(id: number): void {
    if (confirm('Are you sure you want to delete offerId ' + this.httpservice.selectedOffer.id)) {
      this.httpservice.deleteOne(id);
      (document.getElementById('StatusField') as HTMLInputElement).value = '';
      (document.getElementById('bidField') as HTMLInputElement).value = null;
      (document.getElementById('titleField') as HTMLInputElement).value = '';
      (document.getElementById('descriptionField') as HTMLInputElement).value = '';

    } else {
      console.log('geannuleerd');
    }
  }

  cancel(): void {
    if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.httpservice.selectedOffer.status ||
      (document.getElementById('titleField') as HTMLInputElement).value !== this.httpservice.selectedOffer.title ||
      (document.getElementById('descriptionField') as HTMLInputElement).value !== this.httpservice.selectedOffer.description ||
      // tslint:disable-next-line:max-line-length
      parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.httpservice.selectedOffer.valueHighestBid + '',
        10)
    ) {
      if (confirm('Are you sure to discard unsaved changes?')) {
        (document.getElementById('StatusField') as HTMLInputElement).value = '';
        (document.getElementById('bidField') as HTMLInputElement).value = null;
        (document.getElementById('titleField') as HTMLInputElement).value = '';
        (document.getElementById('selectedId') as HTMLInputElement).value = '';
        (document.getElementById('descriptionField') as HTMLInputElement).value = '';
        this.httpservice.selectedOffer.id = null;
      }
    } else {
      (document.getElementById('StatusField') as HTMLInputElement).value = '';
      (document.getElementById('bidField') as HTMLInputElement).value = null;
      (document.getElementById('titleField') as HTMLInputElement).value = '';
      (document.getElementById('selectedId') as HTMLInputElement).value = '';
      (document.getElementById('descriptionField') as HTMLInputElement).value = '';
      this.httpservice.selectedOffer.id = null;
    }
  }

  clear(): void {
    if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.httpservice.selectedOffer.status ||
      (document.getElementById('titleField') as HTMLInputElement).value !== this.httpservice.selectedOffer.title ||
      (document.getElementById('descriptionField') as HTMLInputElement).value !== this.httpservice.selectedOffer.description ||
      // tslint:disable-next-line:max-line-length
      parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.httpservice.selectedOffer.valueHighestBid + '',
        10)
    ) {
      if (confirm('Are you sure to discard unsaved changes?')) {
        console.log(parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10));
        (document.getElementById('StatusField') as HTMLInputElement).value = '';
        (document.getElementById('bidField') as HTMLInputElement).value = null;
        (document.getElementById('titleField') as HTMLInputElement).value = '';
        (document.getElementById('descriptionField') as HTMLInputElement).value = '';
      }
    } else {
      (document.getElementById('StatusField') as HTMLInputElement).value = '';
      (document.getElementById('bidField') as HTMLInputElement).value = null;
      (document.getElementById('titleField') as HTMLInputElement).value = '';
      (document.getElementById('descriptionField') as HTMLInputElement).value = '';
    }
  }

  reset(): void {
    if ((document.getElementById('StatusField') as HTMLInputElement).value !== this.httpservice.selectedOffer.status ||
      (document.getElementById('titleField') as HTMLInputElement).value !== this.httpservice.selectedOffer.title ||
      (document.getElementById('descriptionField') as HTMLInputElement).value !== this.httpservice.selectedOffer.description ||
      // tslint:disable-next-line:max-line-length
      parseInt((document.getElementById('bidField') as HTMLInputElement).value, 10) !== parseInt(this.httpservice.selectedOffer.valueHighestBid + '',
        10)
    ) {
      if (confirm('Are you sure to discard unsaved changes?')) {
        (document.getElementById('titleField') as HTMLInputElement).value = this.httpservice.selectedOffer.title;
        (document.getElementById('StatusField') as HTMLInputElement).value = this.httpservice.selectedOffer.status;
        (document.getElementById('descriptionField') as HTMLInputElement).value = this.httpservice.selectedOffer.description;
        (document.getElementById('bidField') as HTMLInputElement).value = this.httpservice.selectedOffer.valueHighestBid + '';
      }


    } else {
      (document.getElementById('titleField') as HTMLInputElement).value = this.httpservice.selectedOffer.title;
      (document.getElementById('StatusField') as HTMLInputElement).value = this.httpservice.selectedOffer.status;
      (document.getElementById('descriptionField') as HTMLInputElement).value = this.httpservice.selectedOffer.description;
      (document.getElementById('bidField') as HTMLInputElement).value = this.httpservice.selectedOffer.valueHighestBid + '';
    }
  }

  edit(): void {
    const newOffer: Offer = new Offer();
    newOffer.title = (document.getElementById('titleField') as HTMLInputElement).value;
    newOffer.status = Status[(document.getElementById('StatusField') as HTMLInputElement).value];
    newOffer.valueHighestBid = parseInt((document.getElementById('bidField') as HTMLInputElement).value, 0);
    newOffer.sellingdate = this.httpservice.selectedOffer.sellingdate;
    newOffer.description = (document.getElementById('descriptionField') as HTMLInputElement).value;
    newOffer.id = this.httpservice.selectedOffer.id;
    this.httpservice.edit(newOffer);
  }

  // setOfferCopy(): void{
  //   this.httpservice.findById(this.httpservice.selectedOffer.id).subscribe(
  //       data => {
  //         this.httpservice.selectedOffer.id = Offer.trueCopy(data as Offer);
  //         this.originalOffer = Offer.trueCopy(data as Offer);
  //       });
  // }

}
