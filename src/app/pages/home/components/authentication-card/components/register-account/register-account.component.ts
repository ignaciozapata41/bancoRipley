import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

//services
import { UserService } from 'src/app/shared/services/user.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

// class
import { User } from './../../../../../../interfaces/interfaces';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  newUserForm : FormGroup;
  optionscreditCard: any = {header: 'Necesita abrir cuenta Corriente?'};

  constructor(private formBuilder: FormBuilder, private _UserService:UserService, private _LoadingService: LoadingService){

    this.newUserForm = formBuilder.group({
      rut: [null, [Validators.required, Validators.minLength(9)]],
      name: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  async createNewUser(){
    await this._LoadingService.presentLoading('Registrando Nuevo Usuario...');
    let {rut, name, password, email} = this.newUserForm.value;
    let newUser = new User(rut.replace('.','').replace('.',''),name,email.toLowerCase(),password);

    await this._UserService.createNewUser(newUser);
    this._LoadingService.hideLoading();
  }

}
