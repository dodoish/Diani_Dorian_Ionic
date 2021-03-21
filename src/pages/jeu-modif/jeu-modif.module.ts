import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeuModifPage } from './jeu-modif';

@NgModule({
  declarations: [
    JeuModifPage,
  ],
  imports: [
    IonicPageModule.forChild(JeuModifPage),
  ],
})
export class JeuModifPageModule {}
