import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss']
})
export class GlobalErrorComponent {
  constructor(private errorService:ErrorService) {}
  
  get errorMessage():Subject<string> {
    return this.errorService.error$;
  }
  clearError() {
    this.errorService.clear();
  }
}
