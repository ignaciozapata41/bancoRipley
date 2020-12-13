import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

//services
import { ToastService } from './../../../../../../shared/services/toast.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() showNewAccountFormEmitter = new EventEmitter;
  loginForm : FormGroup;
  type = {}

  constructor(private formBuilder: FormBuilder, private _UserService:UserService) {
    this.loginForm = formBuilder.group({
      rut: [null, [Validators.required]],
      password: [null, Validators.required],
    });
   }

  ngOnInit() {}


  login(){
    let {rut, password} = this.loginForm.value;
    this._UserService.login(rut.replace('.',''),password );
  }

  ShowNewAccountForm(){
    this.showNewAccountFormEmitter.emit();
  }
}
