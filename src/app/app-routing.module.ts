import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundBoardComponent } from './sound-board/sound-board.component';

const routes: Routes = [{ path: '', component: SoundBoardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
