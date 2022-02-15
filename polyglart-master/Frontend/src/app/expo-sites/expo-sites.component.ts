import {Component, Inject, Input, OnInit} from '@angular/core';
import { expoS } from '../shared/expos';
import { expo } from '../shared/expo';
import {expoService} from '../services/expo.service';
import {data} from "jquery";
import {ExhibitionSite} from "../data";

@Component({
  selector: 'app-expo-sites',
  templateUrl: './expo-sites.component.html',
  styleUrls: ['./expo-sites.component.css']
})
export class expoSitesComponent implements OnInit {
  public expos: any[];
  errMess: string;


  constructor() { }

  ngOnInit() {
    // this.expoService.getexpos()
    //   .subscribe((expos) => this.expos = expos,
    //       errmess => this.errMess = errmess as any);
  this.expos = ExhibitionSite;
  }

  set exposValue( expo: expo) {
    this.expos.push();
  }

}
