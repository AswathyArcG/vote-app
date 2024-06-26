import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private supabase: SupabaseClient;

  constructor() { 
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

    this.supabase.auth.onAuthStateChange((event: any,session: any) =>{
      console.log("auth changed",event)
      console.log("auth changed session",session)
    });
  }

createAccount({email,password}:{email: string, password: string}){
  return this.supabase.auth.signUp({email,password});
}

login({email,password}:{email: string, password: string}){
  return this.supabase.auth.signInWithPassword({email,password});
}
}
