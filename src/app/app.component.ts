import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterService } from './services/counter.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private counterService = inject(CounterService);
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  constructor() {
    this.fetchInitialCounter();
  }

  private fetchInitialCounter() {
    this.counterService.getCounter().subscribe({
      next: (response) => {
        this.counterSubject.next(response.counter);
      },
      error: (error) => {
        console.error('Error al obtener el contador:', error);
      },
    });
  }

  increment() {
    this.counterService.incrementCounter().subscribe({
      next: (response) => {
        this.counterSubject.next(response.counter);
      },
      error: (error) => {
        console.error('Error al incrementar:', error);
      },
    });
  }

  decrement() {
    this.counterService.decrementCounter().subscribe({
      next: (response) => {
        this.counterSubject.next(response.counter);
      },
      error: (error) => {
        console.error('Error al decrementar:', error);
      },
    });
  }

  reset() {
    this.counterService.resetCounter().subscribe({
      next: (response) => {
        this.counterSubject.next(response.counter);
      },
      error: (error) => {
        console.error('Error al resetear:', error);
      },
    });
  }
}
