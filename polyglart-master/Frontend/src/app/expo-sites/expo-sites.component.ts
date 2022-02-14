import {Component, Inject, Input, OnInit} from '@angular/core';
import { expoS } from "../shared/expos";
import { expo } from "../shared/expo";
import {expoService} from "../services/expo.service";

@Component({
  selector: 'app-expo-sites',
  templateUrl: './expo-sites.component.html',
  styleUrls: ['./expo-sites.component.css']
})
export class expoSitesComponent implements OnInit {
  public expos: expo[];
  errMess: string;


  constructor(private expoService: expoService) { }

  ngOnInit() {
    this.expoService.getexpos()
      .subscribe((expos)=> this.expos = expos,
          errmess => this.errMess = <any>errmess);
  }

  set exposValue ( expo: expo) {
    this.expos.push(expo);
  }

}
