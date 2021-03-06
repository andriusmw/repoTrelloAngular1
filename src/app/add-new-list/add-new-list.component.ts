import { Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  
})
export class AddNewListComponent {
  constructor(private dataService: DataManagerService) {}
  addList(ev) {
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewList(ev.target.value.trim());
      ev.target.value = '';
    }
  }
}
