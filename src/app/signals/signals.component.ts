import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  count: WritableSignal<number> = signal<number>(0);
  x: WritableSignal<number> = signal<number>(0);
  y: WritableSignal<number> = signal<number>(0);
  z = computed(() => this.x() + this.y());
  normalvalue = 10
  isShowMessage:boolean=false;

  constructor() {
    effect(() => {
      if (this.count() < 0) {
        this.count.set(0);
        this.showMessage();
      } else if (this.count() > 10) {
        this.count.set(0);
        this.showMessage();
      }
    });
  }

  showMessage(){
    this.isShowMessage = true;
    setTimeout(() => {
      this.isShowMessage = false;
    }, 2000);
  }
}
