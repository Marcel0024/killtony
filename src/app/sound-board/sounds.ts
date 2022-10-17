import { SoundFile } from './sound-file.interface';

const soundLocation = '/sound-clips/';

export const sounds: SoundFile[] = [
  {
    name: 'Law & Order',
    audio: new Audio(soundLocation + 'lawandorder.mp3'),
    emoji: '⚖️',
  },
  {
    name: 'Baking Soda',
    audio: new Audio(soundLocation + 'baking-soda.mp3'),
    emoji: '🖤',
  },
  {
    name: 'Horn Awesome',
    audio: new Audio(soundLocation + 'horn-awesome.mp3'),
    emoji: '📯',
  },
  {
    name: 'Horn Dixie',
    audio: new Audio(soundLocation + 'horn-dixie.mp3'),
    emoji: '📯',
  },
  {
    name: 'Horn Fail',
    audio: new Audio(soundLocation + 'horn-fail.mp3'),
    emoji: '📯',
  },
  {
    name: 'Horn Price is Right ',
    audio: new Audio(soundLocation + 'horn-fail-2.mp3'),
    emoji: '📯',
  },
  {
    name: 'Raining Man',
    audio: new Audio(soundLocation + 'raining-man.mp3'),
    emoji: '☔',
  },
  {
    name: 'Fart and Vomit',
    audio: new Audio(soundLocation + 'fart-and-vomit.mp3'),
    emoji: '💨',
  },
  {
    name: 'Fart',
    audio: new Audio(soundLocation + 'fart.mp3'),
    emoji: '💨',
  },
  {
    name: 'Pornhub',
    audio: new Audio(soundLocation + 'pornhub.mp3'),
    emoji: '🔞',
  },
  {
    name: 'Seatbelt sign',
    audio: new Audio(soundLocation + 'airline-seatbelt.mp3'),
    emoji: '✈️',
  },
  {
    name: 'Gunshot',
    audio: new Audio(soundLocation + 'gunshot.mp3'),
    emoji: '🔫',
  },
  {
    name: 'Careless Whisper',
    audio: new Audio(soundLocation + 'romantic.mp3'),
    emoji: '💖',
  },
  {
    name: 'Cam Girl',
    audio: new Audio(soundLocation + 'cam-girl.mp3'),
    emoji: '👧',
  },
  {
    name: 'Lonely Man (Hulk)',
    audio: new Audio(soundLocation + 'lonely-man.mp3'),
    emoji: '😥',
  },
  {
    name: 'Horn Clown',
    audio: new Audio(soundLocation + 'horn-clown.mp3'),
    emoji: '🤡',
  },
  {
    name: "She's my Cherry Pie",
    audio: new Audio(soundLocation + 'cherry-pie.mp3'),
    emoji: '🍒',
  },
  {
    name: 'Baby Crying',
    audio: new Audio(soundLocation + 'baby-crying.mp3'),
    emoji: '👶',
  },
  {
    name: 'Sheep',
    audio: new Audio(soundLocation + 'sheep.mp3'),
    emoji: '🐑',
  },
];
