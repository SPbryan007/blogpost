import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/core/models/auth.state';
import { AppState } from 'src/app/state/app.state';
import { AuthActions } from 'src/app/state/auth/auth.actions';
import { selectIsLoggedIn } from 'src/app/state/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn$: Observable<Boolean> = new Observable<Boolean>();

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn);
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout())
  }
        
}
