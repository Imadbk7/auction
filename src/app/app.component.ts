import { Component } from '@angular/core';
import {OffersService} from './services/offers.service';
import {OffersHttpService} from './services/offers-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static offerservice: OffersService = new OffersService();

  title = 'webframeworks-resit';
}
