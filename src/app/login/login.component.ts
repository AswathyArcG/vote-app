import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder){
    
    this.form = this.fb.group({
      email: ['aswathy2017jan@gmail.com', [Validators.required, Validators.email]],
      password: ['123456',[Validators.required,Validators.minLength(6)]]
    })
  }
  ngOnInit(): void {
    
  }

  login(){
    console.log(this.form.value)
  }
}
