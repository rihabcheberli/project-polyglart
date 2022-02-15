import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { expo} from '../../shared/expo';
import { expoS} from '../../shared/expos';
import {ActivatedRoute, Params} from '@angular/router';
import {expoService} from '../../services/expo.service';
import {baseURL} from '../../shared/baseurl';
import {switchMap} from 'rxjs/internal/operators/switchMap';
import {expoSitesComponent} from '../expo-sites.component';
import {ExhibitionSite} from "../../data";

@Component({
  selector: 'app-expo-form',
  templateUrl: './expo-form.component.html',
  styleUrls: ['./expo-form.component.css']
})
export class expoFormComponent implements OnInit {
  expoForm: FormGroup;
  expo: expo;
  expoCopy: expo;
  errMess: string;
  expoIds: string[];
  prev: string;
  next: string;
  @Input('expos') public expos;

  @ViewChild('expoform', { static: true }) expoFormDirective;

  formErrors = {
    name: '',
    desc: '',
    date: '',
  };

  validationMessages = {
    name: {
      required:      'Name is required.',
      minlength:     'Name must be at least 2 characters long.',
      maxlength:     'Name cannot be more than 50 characters long.'
    },
    desc: {
      required:      'Description is required.',
    },
    date: {
      required:      'Date is required.',
    },
  };

  constructor(
      private expoService: expoService,
      private route: ActivatedRoute,
      private fb: FormBuilder,

  ) {
    this.createForm();
  }

  ngOnInit() {
    this.expoService.getexposIds()
      .subscribe((expoId) => this.expoIds = expoId);
  }

  createForm(): void {
    this.expoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)] ],
      desc: ['', Validators.required ],
      date: ['', Validators.required ],
    });

    this.expoForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    // this.route.params
    //   .pipe(switchMap((params: Params) => this.expoService.getexpo(params['id'])))
    //   .subscribe(expo => { this.expo = expo; this.setPrevNext(expo.id); },
    //     errmess => this.errMess = <any>errmess );

    this.onValueChanged();

  }

  setPrevNext(expoId: string) {
    const index = this.expoIds.indexOf(expoId);
    this.prev = this.expoIds[(this.expoIds.length + index - 1) % this.expoIds.length];

    this.next = this.expoIds[(this.expoIds.length + index + 1) % this.expoIds.length];
  }

  onValueChanged(data?: any) {
    if (!this.expoForm) { return; }
    const form = this.expoForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
ExhibitionSite.push(
    { id: (ExhibitionSite.length + 1).toString(),
      name: 'B7L9',
      description: 'Hello',
      exhibitionDate: '14-09-2022',
    }
);
    // console.log(this.expoIds);
    // this.expo = this.expoForm.value;
    // this.expoCopy = this.expoForm.value;
    // this.expoCopy.id = this.expoIds.length.toString() ;
    // this.expos.push(this.expoCopy);
    // this.expoService.putexpo(this.expoCopy)
    //   .subscribe(expo => {
    //       console.log(expo);
    //       this.expo = expo;
    //       this.expoCopy = expo;
    //     },
    //     errmess => { this.expo = null;  this.errMess = errmess as any; });
    // console.log(this.expo);
    // this.expoForm.reset({
    //   name: '',
    //   desc: '',
    //   date: '',
    // });
    // this.expoFormDirective.resetForm();
  }

}
