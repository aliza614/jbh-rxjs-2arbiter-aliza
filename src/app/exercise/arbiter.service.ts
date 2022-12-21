import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArbiterService {
  public item$: Observable<string>;
  private itemSource: Subject<string> = new BehaviorSubject('Initial');
  constructor() {
    this.item$ = this.itemSource.asObservable();
  }

  public emit(item: string): void {
    this.itemSource.next(item);
  }

  public getCurrent(): string {
    return (this.itemSource as BehaviorSubject<string>).value;
  }
}
