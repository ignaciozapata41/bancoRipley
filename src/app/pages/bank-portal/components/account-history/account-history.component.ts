import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankAccountService } from '../../services/bank-account.service';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss'],
})
export class AccountHistoryComponent implements OnInit, OnDestroy {

  constructor(public _BankAccountService: BankAccountService) { }

  ngOnInit() {
    
  }

  ngOnDestroy(){

  }
}
