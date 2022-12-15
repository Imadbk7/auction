import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentDate = new Date(Date.UTC(2020, 8, 14, 12, 10));
  options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  dateNow = this.currentDate.toLocaleString('en-IN', this.options);

  constructor() { }

  ngOnInit(): void {
  }

}
