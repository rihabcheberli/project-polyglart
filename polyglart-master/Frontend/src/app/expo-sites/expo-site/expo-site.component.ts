import {Component, Input, OnInit} from '@angular/core';
import { expo } from '../../shared/expo';

@Component({
  selector: 'app-expo-site',
  templateUrl: './expo-site.component.html',
  styleUrls: ['./expo-site.component.css']
})
export class expoSiteComponent implements OnInit {

  @Input()
  expo: expo;

  constructor() { }

  ngOnInit() {
  }

}
