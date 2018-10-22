import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercaPage } from '../acerca/acerca';
import { AyudaPage } from '../ayuda/ayuda';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  acerca = AcercaPage;
  ayuda = AyudaPage;
  constructor(public navCtrl: NavController) {

  }
  iraNuevapagina(){
    console.log("Click a nueva pagina");
    this.navCtrl.push(this.acerca);
  }

  //setRoot establece la raiz, por esa razon no deja retorno
  iraAyuda(){
    console.log("Click a Ayuda");
    this.navCtrl.push(this.ayuda);
  }

}
