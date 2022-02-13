import {Component, OnInit} from '@angular/core';
import {expos} from '../shared/expos';
import {Expo} from '../shared/expo';
import {ExpoService} from '../services/expo.service';

@Component({
  selector: 'app-expo-sites',
  templateUrl: './expo-sites.component.html',
  styleUrls: ['./expo-sites.component.css']
})
export class ExpoSitesComponent implements OnInit {
  public expos: Expo[];
  errMess: string;


  constructor(private expoService: ExpoService) {
  }

  ngOnInit() {
    this.expoService.getexpos()
      .subscribe(() => this.expos = expos,
        err => this.errMess = err as any);
  }

  set exposValue(expo: Expo) {
    this.expos.push(expo);
  }

}
