import { Component, OnInit } from '@angular/core';
import { SoundFile } from './sound-file.interface';
import { sounds as availableSounds } from './sounds';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {
  sounds = availableSounds;

  ngOnInit(): void {
    availableSounds.sort(nameCompare);

    for (const sound of availableSounds) {
      sound.audio.load();

      if (sound.name === 'Cam Girl') {
        sound.audio.volume = 0.7;
      }
    }
  }

  playSound(audioName: string): void {
    for (const sound of availableSounds) {
      if (sound.name === audioName) {
        if (sound.audio.duration > 0 && !sound.audio.paused) {
          sound.audio.pause();
          sound.audio.currentTime = 0;
        } else {
          sound.audio.play();
        }
      } else {
        sound.audio.pause();
        sound.audio.currentTime = 0;
      }
    }
  }
}

function nameCompare(a: SoundFile, b: SoundFile) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
