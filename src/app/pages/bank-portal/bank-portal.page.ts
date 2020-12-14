import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';

// services
import { MenuService } from 'src/app/shared/services/menu.service';
import { ChargeAmountComponent } from './components/charge-amount/charge-amount.component';
import { TransferAmountComponent } from './components/transfer-amount/transfer-amount.component';
import { WitdhrawComponent } from './components/witdhraw/witdhraw.component';
import { AccountHistoryComponent } from './components/account-history/account-history.component';


@Component({
  selector: 'app-bank-portal',
  templateUrl: './bank-portal.page.html',
  styleUrls: ['./bank-portal.page.scss'],
})

export class BankPortalPage implements OnInit, OnDestroy {
  @ViewChild(ChargeAmountComponent, {static: false}) ChargeAmountComponent: ChargeAmountComponent;
  @ViewChild(WitdhrawComponent, {static: false}) WitdhrawComponent: WitdhrawComponent;
  @ViewChild(TransferAmountComponent, {static: false}) TransferAmountComponent: TransferAmountComponent;
  @ViewChild(AccountHistoryComponent, {static: false}) AccountHistoryComponent: TransferAmountComponent;

  constructor(public _MenuService: MenuService) { }

  ngOnInit() {}

  ngOnDestroy(){
    this.ChargeAmountComponent? this.ChargeAmountComponent.ngOnDestroy() : null;;
    this.WitdhrawComponent? this.WitdhrawComponent.ngOnDestroy() : null;
    this.TransferAmountComponent? this.TransferAmountComponent.ngOnDestroy() : null;
    this.AccountHistoryComponent? this.AccountHistoryComponent.ngOnDestroy() : null;
    this._MenuService.setActiveOption('chargeMount');
  }

}
