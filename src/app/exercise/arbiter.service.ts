import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbiterService {
  constructor() {
  }

  public emit(item: string): void {
  }
}