import { Component, contentChild, contentChildren } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  firstUserItem = contentChild.required(UserItemComponent);
  userItems = contentChildren(UserItemComponent);

  ngOnInit() {
    // console.log(`UserListComponent. firstUserItem id: [${this.firstUserItem()?.id()}]`);

    // this.userItems().forEach((userItem) => {
    //   console.log(`UserListComponent. User item id: [${userItem.id()}]`)
    // });
  }
}
