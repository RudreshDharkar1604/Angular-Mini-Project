import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadingSelector } from '../../auth/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboardComponent {
  loading: Observable<boolean>;
  constructor(private store: Store) {
    this.loading = this.store.select(loadingSelector);
  }
}
