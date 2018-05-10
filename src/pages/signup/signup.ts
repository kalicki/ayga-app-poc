import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignUpPage {
  model: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController, 
    private userProvider: UsersProvider) {

    this.model = new User();
  }

  // Change page in button "back"
  openSignIn() {
    this.navCtrl.pop();
  }

  // Event signup for new users
  signUp() {
    this.userProvider.register(this.model.first_name, this.model.last_name, this.model.email, this.model.password, this.model.password_confirmation)
    .then((result: any) => { // Success
      // Send alert in window
      this.alertCtrl.create({
        message: 'Usuário criado com sucesso'
      }).present();

      // Redirect SignIn
      this.openSignIn();
    })
    .catch((error: any) => {
      // Send alert in window with simple text
      this.alertCtrl.create({
        title: 'Erro!',
        subTitle: 'Erro ao criar o usuário. Por favor preencha novamente.',
        buttons: ['OK']
      }).present();
    });
  }
}

// Class User for Types
export class User {
  first_name :string;
  last_name :string;
  email: string;
  password: string;
  password_confirmation: string;
}
