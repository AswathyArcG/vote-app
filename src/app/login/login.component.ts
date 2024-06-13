import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ){
    
    this.form = this.fb.group({
      email: ['aswathy2017jan@gmail.com', [Validators.required, Validators.email]],
      password: ['123456',[Validators.required,Validators.minLength(6)]]
    })
  }
  ngOnInit(): void {
    
  }

  async login(){
    console.log(this.form.value)
    const {session, error} =   await this.auth.login(this.form.value);
   
    console.log(error);
    if(error){
      //todo error
    }else{
      console.log(session)
      this.router.navigateByUrl('/app',{replaceUrl: true})
    }
  }

  async createAccount(){
    console.log(this.form.value)
    const {data, error} = await this.auth.createAccount(this.form.value);
    console.log(error);
    if(error){
      //todo error
    }else{
      console.log(data)
      this.router.navigateByUrl('/app',{replaceUrl: true})
    }
  }
}
