import { Component, OnInit } from '@angular/core';

// services
import { UserService } from 'src/app/shared/services/user.service';

// interfaces
import { User } from 'src/app/interfaces/interfaces'

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  userInfo: User; 

  constructor(private _UserService: UserService) {
    console.log('entre')
    let user  = this._UserService.getUser();
    console.log('uawe', user);
    this.userInfo = user? user : null;
   }

  async ngOnInit() {

  }
}
