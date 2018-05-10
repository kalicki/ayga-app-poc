import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})

export class SignInPage {
  model: User;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController, 
    private userProvider: UsersProvider) {

    this.model = new User();
  }

  // Change view for SignUp
  openSignUp() {
    this.navCtrl.push('SignUpPage');
  }

  // Event sigin for login
  signIn() {
    // Send alert
    let loading = this.alertCtrl.create({
      message: 'Aguarde...'
    });
    loading.present();

    this.userProvider.login(this.model.email, this.model.password)
      .then((result: any) => { // Success
        loading.dismiss();
        
        // Redirect for page video list
        //this.navCtrl.pop();
        this.navCtrl.setRoot('VideosListPage');
      })
      .catch((error: any) => {
        loading.dismiss();

        this.alertCtrl.create({
          title: 'Erro!',
          subTitle: 'Usuário ou Senha inválido',
          buttons: ['OK']
        }).present();
      });
  }
}

// Class User for Types
export class User {
  email: string;
  password: string;
}
