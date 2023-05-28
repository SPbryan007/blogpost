import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { authenticateUser, userAuthenticated } from 'src/app/state/actions/auth.actions';
import { AuthActions } from 'src/app/state/auth/auth.actions';
import { selectIsLoading } from 'src/app/state/auth/auth.selectors';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private readonly store: Store,
    private readonly authService: AuthService
  ){ }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectIsLoading);
  }

  login() :void {
    this.store.dispatch(AuthActions.login(this.loginForm.value));     
  }
}
