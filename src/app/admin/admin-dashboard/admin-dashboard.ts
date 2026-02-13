import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectError, selectLoading, selectRole } from '../../auth/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboardComponent {
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  role$: Observable<string | null>;
  constructor(private store: Store) {
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.role$ = this.store.select(selectRole);
  }
}
