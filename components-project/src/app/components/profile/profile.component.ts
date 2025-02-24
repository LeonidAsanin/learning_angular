import {
  Component,
  computed,
  effect,
  input,
  InputSignal,
  InputSignalWithTransform,
  model,
  numberAttribute,
  output,
  Signal,
} from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  host: {
    '(click)': 'handleProfileClick()'
  }
})
export class ProfileComponent {
  public firstName: InputSignal<string> = input.required<string>();
  public lastName: InputSignalWithTransform<string, string> = input('', {
    transform: this.trimString,
  });
  public fullName: Signal<string> = computed(
    () => `${this.firstName()} ${this.lastName()}`
  );
  public age = input(0, {transform: numberAttribute});
  public rating = model<number>(0);
  public limitExcided = output();

  constructor() {
    effect(() => {
      console.log(`Full name: ${this.fullName()}. Age: ${this.age()}. Rating: ${this.rating()}`);
      if (this.rating() > 105) {
        this.limitExcided.emit();
      }
    });
  }

  private trimString(value: string): string {
    return value.trim();
  }

  public updateRating(): void {
    this.rating.update((prev) => ++prev);
  }

  private handleProfileClick(): void {
    console.log('Click on profile');
  }
}
