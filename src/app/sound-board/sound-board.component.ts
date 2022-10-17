import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {
  soundLocation = '/sound-clips/';

  sounds: SoundFile[] = [
    {
      name: 'Law & Order',
      audio: new Audio(this.soundLocation + 'lawandorder.mp3'),
      icon: 'balance',
      emoji: '⚖️',
    },
    {
      name: 'Baking Soda',
      audio: new Audio(this.soundLocation + 'baking-soda.mp3'),
      icon: 'man',
      emoji: '🖤',
    },
    {
      name: 'Horn Awesome',
      audio: new Audio(this.soundLocation + 'horn-awesome.mp3'),
      icon: 'auto_awesome',
      emoji: '📯',
    },
    {
      name: 'Horn Dixie',
      audio: new Audio(this.soundLocation + 'horn-dixie.mp3'),
      icon: 'auto_awesome',
      emoji: '📯',
    },
    {
      name: 'Horn Fail',
      audio: new Audio(this.soundLocation + 'horn-fail.mp3'),
      icon: 'trending_down',
      emoji: '📯',
    },
    {
      name: 'Horn Price is Right ',
      audio: new Audio(this.soundLocation + 'horn-fail-2.mp3'),
      icon: 'trending_down',
      emoji: '📯',
    },
    {
      name: 'Raining Man',
      audio: new Audio(this.soundLocation + 'raining-man.mp3'),
      icon: 'cloudy_snowing',
      emoji: '☔',
    },
    {
      name: 'Fart and Vomit',
      audio: new Audio(this.soundLocation + 'fart-and-vomit.mp3'),
      icon: 'air',
      emoji: '💨',
    },
    {
      name: 'Fart',
      audio: new Audio(this.soundLocation + 'fart.mp3'),
      icon: 'air',
      emoji: '💨',
    },
    {
      name: 'Pornhub',
      audio: new Audio(this.soundLocation + 'pornhub.mp3'),
      icon: 'hub',
      emoji: '🔞',
    },
    {
      name: 'Seatbelt sign',
      audio: new Audio(this.soundLocation + 'airline-seatbelt.mp3'),
      icon: 'airplanemode_active',
      emoji: '✈️',
    },
    {
      name: 'Gunshot',
      audio: new Audio(this.soundLocation + 'gunshot.mp3'),
      icon: 'arrow_forward',
      emoji: '🔫',
    },
    {
      name: 'Romantic',
      audio: new Audio(this.soundLocation + 'romantic.mp3'),
      icon: 'heart',
      emoji: '💖',
    },
    {
      name: 'Cam Girl',
      audio: new Audio(this.soundLocation + 'cam-girl.mp3'),
      icon: 'camera',
      emoji: '👧',
    },
    {
      name: 'Lonely Man (Hulk)',
      audio: new Audio(this.soundLocation + 'lonely-man.mp3'),
      icon: 'piano',
      emoji: '😥',
    },
    {
      name: 'Horn Clown',
      audio: new Audio(this.soundLocation + 'horn-clown.mp3'),
      icon: 'circle',
      emoji: '🤡',
    },
    {
      name: "She's my Cherry Pie",
      audio: new Audio(this.soundLocation + 'cherry-pie.mp3'),
      icon: 'fruit',
      emoji: '🍒',
    },
  ];

  ngOnInit(): void {
    this.sounds.sort(nameCompare);

    for (const sound of this.sounds) {
      sound.audio.load();

      if (sound.name === 'Cam Girl') {
        sound.audio.volume = 0.7;
      }
    }
  }

  playSound(audioName: string): void {
    for (const sound of this.sounds) {
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

export interface SoundFile {
  name: string;
  audio: HTMLAudioElement;
  icon: string;
  emoji: string;
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
