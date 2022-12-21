import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArbiterService } from './arbiter.service';

@Component({
  selector: 'consumer',
  templateUrl: 'consumer.component.html'
})
export class ConsumerComponent {
  public lastItem: Observable<string>;
  constructor(private readonly arbiter: ArbiterService) {
  }

  public ngOnInit(): void {
    this.lastItem = this.arbiter.myObservable$;
  }

  public startSubscription(): void {
    // Use for part 2 and 3
  }
}