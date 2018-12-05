import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService,
              private _router: Router) { }

  ngOnInit() {
    this.adunitservice.getAdUnits().subscribe((data: AdUnit[]) => {
        this.adunits = data;
        console.log(data);
      });
  }

  // delete unit
  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe((res) => {
      console.log('Deleted');
      this._router.navigate(['/']);
    }, (err) => console.log(err));
  }

}
