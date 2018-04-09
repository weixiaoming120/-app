import { Component,ViewChild  } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController,ModalController  } from 'ionic-angular';
// import { ModalPage } from './modal-page';
import { SubpagePage } from '../subpage/subpage';
import { LoginPage } from '../login/login';
import { RegistPage } from '../regist/regist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // 轮播图设置
  @ViewChild(Slides) slides: Slides;
  ionViewWillEnter(){
    this.slides.startAutoplay();
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  change = "message";
  // menu
  // presentModal() {
  //   let modal = this.modalCtrl.create(ModalPage);
  //   modal.present();
  // }
  goSub(){
    this.navCtrl.push(SubpagePage,{name:'liu'});
  }
  //返回按钮
goBack(){

  this.navCtrl.push(RegistPage);

}

}
