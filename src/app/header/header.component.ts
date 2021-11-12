import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../header.model';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template:'<img src="assets/images/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg">',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

constructor(private formBuilder: FormBuilder, private fb:FormBuilder, private router:Router , private HeaderService:HeaderService,private _InteractionService:HeaderService, private inputuser:HeaderService) {}

/*myGroup=new FormGroup({
  name: new FormControl('',[Validators.required]),
  alamat: new FormControl('',[Validators.required]),
  alamat2: new FormControl('',[Validators.required]),
  negeri: new FormControl('',[Validators.required]),
  bandar: new FormControl('',[Validators.required]),
  poskod: new FormControl('',[Validators.required]),
  kad: new FormControl('',[Validators.required]),
  dob: new FormControl('',[Validators.required]),
  mas:new FormControl('',[Validators.required]),
  attach: new FormControl('',[Validators.required]),
  recaptcha : new FormControl(), 
})*/

//recaptcha and form
public aFormGroup: FormGroup;
myGroup: FormGroup;
user: any={};

ngOnInit() {
  this.re()

  this.createRegisterationForm()
}

re(){
  this.aFormGroup = this.formBuilder.group({
    recaptcha: ['', Validators.required] });
}

createRegisterationForm(){
  this.myGroup= this.fb.group({
    name: ['',Validators.required],
    alamat: ['',Validators.required],
    alamat2: ['',Validators.required],
    negeri: ['',Validators.required],
    bandar: ['',Validators.required],
    poskod: ['',Validators.required],
    kad: ['',Validators.required],
    dob: ['',Validators.required],
    //mas:['',Validators.required],
    attach: ['',Validators.required],
    recaptcha: ['', Validators.required],
  });
}

//function every input and pass to html
get recaptcha(){
  return this.myGroup.get('recaptcha');
}
get myGroupFrom():any{
  return this.myGroup.controls;
}

upImage: any
onselectFile(event: any){
  if (event.target.files){
    const reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.upImage=(event.target.result);
    }
}
}
onUpload(){
  this._InteractionService.sendImage(this.upImage);
  console.log(this.upImage)
}
//function button 
onSubmit(myGroup: any): any {
  console.log(this.myGroup);
  this.HeaderService.send(myGroup);
  this.router.navigate(['/displayRegister']);

  this.user= Object.assign(this.user, this.myGroup.value);
  this.HeaderService.addUser(this.user);
}

  myImage:string= "assets/images/alvin-mahmudov-9_XfcBxf_uo-unsplash.jpg";
  myImg:string="assets/images/yFGi7W-simple-decorative-border-png-icon.png";
  img:string="assets/images/banner_jb.png"
  gamba:string="assets/images/Copthorne-Hotel-Cadangan-Honeymoon.jpg"
  pic:string="assets/images/Screenshot-2020-07-01-at-8.20.20-AM.png"
  vid:string="assets/images/richtectvidwed2.mp4"
  quote = 'Bermula kisah cinta Adam&Hawa'
  hadis='Jika seseorang menikah, maka ia telah menyempurnakan separuh agamanya. Karenanya, bertakwalah pada Allah pada separuh yang lainnya.(HR. Al Baihaqi)'
  wed:string="assets/images/content_shutterstock_714225325.jpg"
  ic:string="assets/images/IC-baru.transformed.jpg"
  home:string="assets/images/png-clipart-metrostation-black-home-icon-thumbnail.png"
  bg:string="assets/images/Bouquets_Roses_Pink_color_Template_greeting_card_573919_2560x1440.jpeg"

//date: {year: number, month: number};  //date format

siteKey:string ="6LcN7JMcAAAAANGYvvk-luJO5OvFx-7ypnq9L1LD"; 

}