import {Component, OnInit} from '@angular/core';
import {OffersHttpService} from '../../services/offers-http.service';

@Component({
  selector: 'app-overview5',
  templateUrl: './overview5.component.html',
  styleUrls: ['./overview5.component.css']
})
export class Overview5Component implements OnInit {

  constructor(public offerhttp: OffersHttpService) {
  }

  ngOnInit(): void {
  }

  }


