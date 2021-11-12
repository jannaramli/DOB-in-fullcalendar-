import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testvalid',
  templateUrl: './testvalid.component.html',
  styleUrls: ['./testvalid.component.scss']
})
export class TestvalidComponent implements OnInit {

  constructor(private router:Router) { 
}
  ngOnInit(): void {
  }
  
  title: string = "RichtechDemo"
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
  bghome:string="assets/images/WhatsApp Image 2021-10-24 at 10.57.38 PM.jpeg"

  goRegister(){
    this.router.navigate(['/register']);
  }
}
