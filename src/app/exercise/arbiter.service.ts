import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbiterService {
  
  private displaySource: Subject<string> = new Subject();
  public myObservable$: Observable<string>=this.displaySource.asObservable();
  constructor() {
  }

  public emit(item: string): void {
    this.displaySource.next(item);
  }
}