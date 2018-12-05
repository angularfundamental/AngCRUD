import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService,
              private fb: FormBuilder,
              private _route: Router) {
    this.createForm();
  }

//  creating unit
  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required],
      unit_price: ['', Validators.required]
    });
  }

  //  adding new units
  addAdUnit(unit_name, unit_price) {
    this.adunitservice.addAdUnit(unit_name, unit_price).subscribe((res) => {
      console.log('Successfully Inserted');
      this._route.navigate(['/']);
    }, (err) => console.log(err));
  }

  ngOnInit() {
  }

}
