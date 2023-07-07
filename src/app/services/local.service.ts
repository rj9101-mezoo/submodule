import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/global.service';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor(private globalService: GlobalService) {
    console.log('local service init');
  }

  account?: string = this.globalService.account;
}
