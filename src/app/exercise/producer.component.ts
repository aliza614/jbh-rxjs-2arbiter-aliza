import { Component } from '@angular/core';
import { ArbiterService } from './arbiter.service';

@Component({
  selector: 'producer',
  templateUrl: 'producer.component.html'
})
export class ProducerComponent {
  private callCount: number = 0;
  constructor(private readonly arbiter: ArbiterService) {
  }

  public emitItem(): void {
    this.arbiter.emit(`Call # ${++this.callCount}`);
  }
}