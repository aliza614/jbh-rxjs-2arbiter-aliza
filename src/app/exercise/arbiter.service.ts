import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbiterService {
  private displaySource: Subject<String> = new Subject();
  constructor() {
  }

  public emit(item: string): void {
    
  }
}