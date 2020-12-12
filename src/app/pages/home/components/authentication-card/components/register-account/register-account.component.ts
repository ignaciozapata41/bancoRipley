import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss'],
})
export class RegisterAccountComponent implements OnInit {
  newUserForm : FormGroup;
  optionscreditCard: any = {header: 'Necesita abrir cuenta Corriente?'};

  constructor(private formBuilder: FormBuilder) {

    this.newUserForm = formBuilder.group({
      rut: [null, Validators.required],
      name: [null, Validators.required],
      surnames: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  logForm(){
    console.log('form', this.newUserForm);
  }

}
