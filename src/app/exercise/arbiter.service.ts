import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArbiterService {
  public item$: Observable<string>;
  private itemSource: Subject<string> = new ReplaySubject(1);
  constructor() {
    this.item$ = this.itemSource.asObservable();
  }

  public emit(item: string): void {
    this.itemSource.next(item);
  }
}
