import { Component } from '@angular/core';
import { ArbiterService } from './arbiter.service';

@Component({
  selector: 'producer',
  templateUrl: 'producer.component.html'
})
export class ProducerComponent {
  constructor(private readonly arbiter: ArbiterService) {
  }

  public emitItem(): void {
  }
}