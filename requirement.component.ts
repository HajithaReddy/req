import { Component } from '@angular/core';
import { FormArray, FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { HomeService } from 'src/app/home.service';

interface IUser {
  reqName: string;
  position: string;
  location: string;
  hmanager: string;
  tal: string;
  ego: string;
  experience_min: number;
  experience_max: number;
}

const COUNTRIES: IUser[] = [

];

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})

export class RequirementComponent {
  model: any;
  dropdownSettings: IDropdownSettings = {};
  Cities: string[] = [

    'Pune',
    'chennai',
    'Banglore',
    'Hyderabad',
    'Mumbai'

  ];
  // HiringManager: string[] = [
  //   'Mr. A',
  //   'Mr. B',
  //   'Ms. C',
  //   'Mrs. D'
  // ];


  // TalentAcquisition: string[] = [
  //   'aricent',
  //   'altran',
  //   'capgemini',
  //   'globalEdge'
  // ];
  // Ego: string[] = [
  //   'Abcd',
  //   'efgh',
  //   'ijkh'
  // ];

  reqadd: boolean = false;
  listView: boolean = true;
  requirementedit: boolean = false;
  req: IUser;
  reqForm!: UntypedFormGroup;
  countries = COUNTRIES;
  submitted = false;
  hrdropdownList: any = [];
  tadropdownList: any = [];
  egodropdownList: any = [];
  hmselectedItems: any = [];
  taselectedItems: any = [];
  egoselectedItems: any = [];
  userData: any = [];
  userDataCopy: any;
  index_edit: any;
  is_edit: boolean = false;
  hm: any;
  tal1: any;
  ego1: any;
  index_copy: any;
  users: any;
  editreq: any;
  constructor(private home: HomeService, private router: Router) {
    this.req = {} as IUser;
  }


  ngOnInit(): void {
    this.getReq();
    this.listView = true;
    this.reqForm = new UntypedFormGroup({
      reqName: new UntypedFormControl(this.req.reqName, [Validators.required]),
      position: new UntypedFormControl(this.req.position, [Validators.required]),
      location: new UntypedFormControl(this.req.location, [Validators.required]),
      hmanager: new UntypedFormControl(this.req.hmanager, [Validators.required]),
      tal: new UntypedFormControl(this.req.tal, [Validators.required]),
      ego: new UntypedFormControl(this.req.ego, [Validators.required]),
      experience_min: new UntypedFormControl(this.req.experience_min, [Validators.required]),
      experience_max: new UntypedFormControl(this.req.experience_max, [Validators.required]),
    });

    this.hrdropdownList = [
      { item_id: 1, item_text: 'A'},
      { item_id: 2, item_text: 'B' },
      { item_id: 3, item_text: 'C' },
      { item_id: 4, item_text: 'D' },
      { item_id: 5, item_text: 'E' }
    ];
    this.tadropdownList = [
      { item_id: 1, item_text: 'Aricent' },
      { item_id: 2, item_text: 'capgemini' },
      { item_id: 3, item_text: 'altran' },
      { item_id: 4, item_text: 'Dell' },
      { item_id: 5, item_text: 'Hp' }
    ];
    this.egodropdownList = [
      { item_id: 1, item_text: 'lmn' },
      { item_id: 2, item_text: 'opq' },
      { item_id: 3, item_text: 'rst' },
      { item_id: 4, item_text: 'uvw' },
      { item_id: 5, item_text: 'xyz' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onSubmit() {
    const data = this.reqForm.value;
    this.submitted = true;
    if (this.reqForm.invalid) {
      return;
    } else {
      // if(this.is_edit=false){
      this.hm = this.reqForm.value.hmanager.map((officer: any) => officer.item_text);
      this.tal1 = this.reqForm.value.tal.map((officer1: any) => officer1.item_text);
      this.ego1 = this.reqForm.value.ego.map((officer2: any) => officer2.item_text);
      // // }
      this.reqForm.patchValue({ hmanager: this.hm, tal: this.tal1, ego: this.ego1 });

      this.userData.push(this.reqForm.value);
      this.userDataCopy = JSON.parse(JSON.stringify(this.userData));
      this.home.createRequirementFn(this.reqForm.value).subscribe(
        (res) => {
          this.users = res;
        }
      )
      this.onReset();
      this.back();
    }
  }

  getReq() {
    this.home.getRequirementFn().subscribe(res => {
      this.userData = res;
      console.log(res);
    });
  }

  onReset() {
    this.submitted = false;
    this.reqForm.reset();


  }
  onEdit(index: any, data: any) {
    this.reqForm.patchValue(data);
    this.home.editRequirementFn(index).subscribe(
      (res) => {
        this.index_edit = index;
        // this.index_copy = this.userDataCopy.findIndex(
        //   (value: any) => value === data);
        this.is_edit = true;
        this.userData = res;
      },
    )
     
    this.req_ad();
  }
  

  req_ad() {
    // this.reqForm.reset();
    this.listView = false;
    this.reqadd = true;
  }

  back() {
    this.reqadd = false;
    this.listView = true;
  }

  get reqName() {
    return this.reqForm.get('reqName')!;
  }

  get position() { 
    return this.reqForm.get('position')!;
  }

  get location() {
    return this.reqForm.get('location')!;
  }

  get hmanager() {
    return this.reqForm.get('hmanager')!;
  }

  get tal() {
    return this.reqForm.get('tal')!;
  }

  get ego() {
    return this.reqForm.get('ego')!;
  }

  get experience_min() {
    return this.reqForm.get('experience_min')!;
  }
  get experience_max() {
    return this.reqForm.get('experience_max')!;
  }



  public validate(): void {
    if (this.reqForm.invalid) {
      for (const control of Object.keys(this.reqForm.controls)) {
        this.reqForm.controls[control].markAsTouched();
      }
      return;
    }
    this.req = this.reqForm.value;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  requirement_edit() {
    this.reqadd = true;
    this.listView = false;
  }

}
