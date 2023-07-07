import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app1';

  constructor(private localService: LocalService) {
    console.log("app1의 app component init")
  }

  ngOnInit(): void {
    console.log(9998459);
    // console.log(this.localService.account, 111);
  }
}
