import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { Route, Router } from '@angular/router';
import { Header } from '../header.model';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-displaywedding',
  templateUrl: './displaywedding.component.html',
  styleUrls: ['./displaywedding.component.scss']
})
export class DisplayweddingComponent implements OnInit {
  img:string="assets/images/banner_jb.png"

public headerList: Observable<any[]>;

constructor(private router: Router, private registration: HeaderService, private registergambar: HeaderService, private sanitizer:DomSanitizer){}

//declare
headItem:any ;
displayGamba: any;

//make interface for value safe
head: SafeResourceUrl;

//call function get from service
 ngOnInit() {
    this.displayGamba=this.registergambar.getGamba();

    //trust what value given, dia detect location yg nak load executed
    this.head=this.sanitizer.bypassSecurityTrustResourceUrl(this.displayGamba);
    
    this.head=this.displayGamba;
    console.log(this.displayGamba);
  
    this.headItem = this.registration.getHead();
    console.log(this.headItem);
  }

}
