import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SoundBoardComponent } from './sound-board.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoadingBarDirective } from './directives/loading-bar.directive';

@NgModule({
  declarations: [SoundBoardComponent, LoadingBarDirective],
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatButtonModule],
})
export class SoundBoardModule {}
