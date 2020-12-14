import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

//services
import { UserService } from 'src/app/shared/services/user.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() showNewAccountFormEmitter = new EventEmitter;
  loginForm : FormGroup;
  type = {}

  constructor(private formBuilder: FormBuilder, private _UserService:UserService, private _LoadingService: LoadingService) {
    this.loginForm = formBuilder.group({
      rut: [null, [Validators.required]],
      password: [null, Validators.required],
    });
   }

  ngOnInit() {}


  async login(){
    await this._LoadingService.presentLoading('Accediendo a portal Bancario');
    let {rut, password} = this.loginForm.value;
    await this._UserService.login(rut.replace('.',''),password );
    this._LoadingService.hideLoading();
  }

  ShowNewAccountForm(){
    this.showNewAccountFormEmitter.emit();
  }
}
