import {Component, Input, OnInit} from '@angular/core';
import { Expo } from '../../shared/expo';

@Component({
  selector: 'app-expo-site',
  templateUrl: './expo-site.component.html',
  styleUrls: ['./expo-site.component.css']
})
export class ExpoSiteComponent implements OnInit {

  @Input()
  expo: Expo;

  constructor() { }

  ngOnInit() {
  }

}
