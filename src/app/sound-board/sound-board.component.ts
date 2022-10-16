import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {
  fileLocation = '/sound-clips/';

  sounds: SoundFile[] = [
    {
      name: 'Law & Order',
      audio: new Audio(this.fileLocation + 'lawandorder.mp3'),
      icon: 'balance',
    },
    {
      name: 'Baking Soda',
      audio: new Audio(this.fileLocation + 'baking-soda.mp3'),
      icon: 'man',
    },
    {
      name: 'Horn Awesome',
      audio: new Audio(this.fileLocation + 'horn-awesome.mp3'),
      icon: 'auto_awesome',
    },
    {
      name: 'Horn Fail',
      audio: new Audio(this.fileLocation + 'horn-fail.mp3'),
      icon: 'trending_down',
    },
    {
      name: 'Raining Man',
      audio: new Audio(this.fileLocation + 'raining-man.mp3'),
      icon: 'cloudy_snowing',
    },
    {
      name: 'Sad Piano',
      audio: new Audio(this.fileLocation + 'sad-piano.mp3'),
      icon: 'piano',
    },
    {
      name: 'Fart and Vomit',
      audio: new Audio(this.fileLocation + 'fart-and-vomit.mp3'),
      icon: 'air',
    },
    {
      name: 'Fart',
      audio: new Audio(this.fileLocation + 'fart.mp3'),
      icon: 'air',
    },
    {
      name: 'Pornhub',
      audio: new Audio(this.fileLocation + 'pornhub.mp3'),
      icon: 'hub',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.sounds.sort(nameCompare);
  }

  playSound(audioName: string): void {
    const audio = this.sounds.find((x) => x.name === audioName)!.audio;

    for (const sound of this.sounds.map((x) => x.audio)) {
      sound.pause();
      sound.currentTime = 0;
    }

    if (audio.duration > 0 && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
  }
}

export interface SoundFile {
  name: string;
  audio: HTMLAudioElement;
  icon: string;
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
