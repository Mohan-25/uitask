import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormfieldsService } from './formfields.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private formfieldService: FormfieldsService) { }
  leftpanel = [];

  drophere = [];
  ngOnInit() {
    const ffObservable = this.formfieldService.getFormfields();
    ffObservable.subscribe((ffData) => {
      this.leftpanel = ffData;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    // debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
