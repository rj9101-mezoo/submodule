import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss'],
})
export class App1Component implements OnInit {
  constructor(private localService: LocalService) {
    console.log('app1 component init');
  }
  ngOnInit(): void {
    console.log(this.localService.account);
  }
}
