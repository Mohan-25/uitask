import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormfieldsService {
  formfields = ['Input Box', 'Select Box', 'Checkbox', 'Radio Button', 'Button']
  constructor() { }
  public getFormfields(): any {
    const formfieldsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.formfields);
      }, 1000);
    });

    return formfieldsObservable;
  }
}
