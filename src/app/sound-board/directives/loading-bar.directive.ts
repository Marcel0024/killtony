import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { interval, map, take, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[loading-bar]',
})
export class LoadingBarDirective implements OnInit {
  @Input() audio!: HTMLAudioElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly el: ElementRef
  ) {}

  ngOnInit(): void {
    this.audio.addEventListener('playing', () => {
      interval(10)
        .pipe(
          map(() => (this.audio.currentTime / this.audio.duration) * 100),
          takeUntil(timer(this.audio.duration * 1000 + 1000))
        )
        .subscribe((percentage) => {
          this.drawBar(percentage);
        });
    });
  }

  drawBar(percentageLeft: number): void {
    let child = this.el.nativeElement.querySelector('[loadingbar]');
    if (child) {
      this.el.nativeElement.removeChild(child);
    }

    if (percentageLeft >= 100) {
      return;
    }

    child = this.document.createElement('div');
    child.setAttribute('loadingbar', '');
    child.setAttribute(
      'style',
      'background-color:#6e6e6e; \
      position: absolute; \
      width: ' +
        percentageLeft +
        '%; \
      height: 5px; \
      bottom: 0px; \
      left: 0px; '
    );

    this.el.nativeElement.appendChild(child);
  }
}
