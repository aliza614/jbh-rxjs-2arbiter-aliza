import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArbiterService } from './arbiter.service';

@Component({
  selector: 'consumer',
  templateUrl: 'consumer.component.html'
})
export class ConsumerComponent {
  public lastItem: string;
  constructor(private readonly arbiter: ArbiterService) {
  }

  public ngOnInit(): void {
    this.arbiter.item$.subscribe({
      next: (item => this.lastItem = item)
    })
  }

  public startSubscription(): void {
    // Use for part 2 and 3
  }
}