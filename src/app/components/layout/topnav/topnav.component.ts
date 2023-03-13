import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Output() menuClicked: EventEmitter<void> = new EventEmitter();

  onClickMenu() {
    this.menuClicked.emit();
  }
}
