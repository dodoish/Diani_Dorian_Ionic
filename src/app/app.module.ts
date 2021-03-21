import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {JeuxListPageModule} from "../pages/jeux-list/jeux-list.module";
import {JeuModifPageModule} from "../pages/jeu-modif/jeu-modif.module";
import {JeuNewPageModule} from "../pages/jeu-new/jeu-new.module";
import {TabPageModule} from "../pages/tab/tab.module";
import { JeuProvider } from '../providers/jeu/jeu';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireModule} from "angularfire2";
import {JeuPageModule} from "../pages/jeu/jeu.module";
import {PhotosPageModule} from "../pages/photos/photos.module";
import { Camera} from "@ionic-native/camera";

const firebase={
  apiKey: "AIzaSyB9ldwR7wsIsXQA4y7e-Q3eudD6V_qQMwU",
  authDomain: "dbjeu-210d2.firebaseapp.com",
  projectId: "dbjeu-210d2",
  storageBucket: "dbjeu-210d2.appspot.com",
  messagingSenderId: "136761879123",
  appId: "1:136761879123:web:f1a884ee9d1abbb37174a6"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JeuxListPageModule,
    JeuModifPageModule,
    JeuNewPageModule,
    JeuPageModule,
    TabPageModule,
    PhotosPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JeuProvider,
    Camera,
  ]
})
export class AppModule {}
