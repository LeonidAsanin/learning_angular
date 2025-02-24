import {
  Component,
  effect,
  ElementRef,
  inject,
  Signal,
  signal,
  viewChild,
  viewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LifecycleTestComponent } from './components/lifecycle-test/lifecycle-test.component';
import { ExtenderComponent } from './components/extender/extender.component';

@Component({
  selector: 'app-root',
  imports: [
    UserListComponent,
    UserItemComponent,
    ProfileComponent,
    LifecycleTestComponent,
    ExtenderComponent,
],
  // template: `<h1 class="header">Inline template</h1>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // styleUrls: ['./app.component.scss'],
  // styles: `.header {
  //   border: 1px solid grey;
  // }`,
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public name = signal('Bob');
  public rating = signal(100);
  public isTestLifeCycleHidden = signal(true);
  public testValue = signal('test value');

  private readonly profileComponent: Signal<ProfileComponent | undefined> =
    viewChild(ProfileComponent);
  private readonly userItems: Signal<readonly UserItemComponent[]> =
    viewChildren(UserItemComponent);
  private readonly headerComponent =
    viewChild<ElementRef<HTMLHeadingElement>>('mainHeader');
  private readonly inputComponent =
    viewChild<ElementRef<HTMLInputElement>>('inputComponent');

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => {
      console.log(`Rating: ${this.rating()}`);
    });

    // this.elementRef.nativeElement.style.color = 'red';
  }

  ngOnInit() {
    // this.profileComponent()?.rating.subscribe((value) => {
    //   console.log(`Profile component. Rating: ${value}`);
    // });
    // this.userItems().forEach((userItem) => {
    //   console.log(`User item id: [${userItem.id()}]`)
    // });
    // console.log(`Header text: ${this.headerComponent()?.nativeElement.textContent}`);
    // this.inputComponent()?.nativeElement.focus();
  }

  public logValue(value: any): void {
    console.log('Log:', value);
  }

  public handleLimitExceeded(): void {
    console.log('Limit exceeded');
  }

  public changeTestLifeCycleVisibility(): void {
    this.isTestLifeCycleHidden.update((prev) => !prev);
  }

  public changeTestValue(): void {
    this.testValue.update((prev) => prev + '!');
  }
}
