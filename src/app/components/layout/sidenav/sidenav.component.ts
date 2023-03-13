import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Output() menuOptionClicked: EventEmitter<void> = new EventEmitter();

  menuOptions: any[] = [
    {
      path: '/characters',
      name: 'Characters',
      icon: 'people'
    },
    {
      path: '/locations',
      name: 'Locations',
      icon: 'location_on'
    },
    {
      path: '/episodes',
      name: 'Episodes',
      icon: 'tv'
    }
  ]


  onClickMenuOption() {
    this.menuOptionClicked.emit();
  }
}
