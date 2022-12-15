import {Component, Input, OnInit} from '@angular/core';
import {Offer} from '../../models/offer.model';
import {OffersService} from '../../services/offers.service';
import {AppComponent} from '../../app.component';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.css']
})
export class Overview4Component implements OnInit {

  @Input() selectedOfferId: number;
  offersService: OffersService = AppComponent.offerservice;

  constructor(public router: Router, public route: ActivatedRoute) {
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

      const title = this.offersService.findById(offer.id).title;
      const id = this.offersService.findById(offer.id).id;
      const sellingdate = this.offersService.findById(offer.id).sellingdate;
      const description = this.offersService.findById(offer.id).description;
      const status = this.offersService.findById(offer.id).status;
      const valueHighestBid = this.offersService.findById(offer.id).valueHighestBid;

      this.offersService.selectedOffer.title = title;
      this.offersService.selectedOffer.id = id;
      this.offersService.selectedOffer.sellingdate = sellingdate;
      this.offersService.selectedOffer.description = description;
      this.offersService.selectedOffer.status = status;
      this.offersService.selectedOffer.valueHighestBid = valueHighestBid;

      console.log(this.offersService.offers);

      this.routeToOffer(offer.id);
    }
  }

  routeToOffer(oId: number): any {
    this.router.navigate([oId], {relativeTo: this.route});
  }

}
