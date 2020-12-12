import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

//services
import { ToastService } from './../../../../../../shared/services/toast.service';

// clases
import { User } from './../../../../../../interfaces/interfaces';
import { UserService } from 'src/app/pages/home/services/user.service';


@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  newUserForm : FormGroup;
  optionscreditCard: any = {header: 'Necesita abrir cuenta Corriente?'};

  constructor(private formBuilder: FormBuilder, private ToastService: ToastService, private _UserService:UserService){

    this.newUserForm = formBuilder.group({
      rut: [null, [Validators.required]],
      name: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  createNewUser(){
    let {rut, name, password, email} = this.newUserForm.value;
    let newUser = new User(rut,name,email,password);

    this._UserService.createNewUser(newUser);
  }

}
