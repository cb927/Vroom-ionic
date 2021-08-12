import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-vt_popup',
  templateUrl: 'vt_popup.html'
})
export class Vt_popupPage {
  loading: any;
  loadingShown: boolean;
  subscribeForm: FormGroup;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private viewCtrl: ViewController, private formBuilder: FormBuilder,
    private http: HttpClient, private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  ngOnInit() {
    this.subscribeForm = this.formBuilder.group({
      email_Id: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  presentLoading(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });
    this.loading.onDidDismiss(() => { });
    this.loading.present();
    this.loadingShown = true;
  }

  dismissLoading() {
    if (this.loadingShown) {
      this.loadingShown = false;
      this.loading.dismiss();
    }
  }
  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  onSubscribe() {
    if (!this.subscribeForm.valid) {
      return this.showToast('Please provide your Email.')
    }
    this.presentLoading('Sending...')
    let req = {
      "email": this.subscribeForm.value.email_Id,
      "source": "opus_template_vroom"
    }
    this.http.post("https://dashboard.vtlabs.dev/api/subscribe", req).subscribe((res) => {
      this.showToast('Submitted successfully.')
      this.viewCtrl.dismiss();
      this.dismissLoading();
    })
  }
}
