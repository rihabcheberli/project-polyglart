import {Component, Input, OnInit} from '@angular/core';
import { expo } from '../../shared/expo';
import {ExhibitionSite} from '../../data';
import {param} from 'jquery';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-expo-details-site',
  templateUrl: './expo-site-details.component.html',
  styleUrls: ['./expo-site-details.component.css']
})
export class ExpoSiteDetailsComponent implements OnInit {
  private routeSub: Subscription;
  expo: expo;
  id: number ;

  constructor(private  route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.id = params.id;
    }) ;
    this.expo = new expo();
    this.expo.id = this.id.toString();
    this.expo.name = ExhibitionSite[this.id - 1].name;
    this.expo.desc = ExhibitionSite[this.id - 1].description;
    this.expo.date = ExhibitionSite[this.id - 1].exhibitionDate;
    console.log(this.expo) ;
  }

}
