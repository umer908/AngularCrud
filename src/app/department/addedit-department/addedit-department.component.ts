import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-addedit-department',
  templateUrl: './addedit-department.component.html',
  styleUrls: ['./addedit-department.component.css']
})
export class AddeditDepartmentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() depart: any;
  DepartmentId = "";
  DepartmentName = "";

  ngOnInit(): void {

    this.DepartmentId = this.depart.DepartmentId;
    this.DepartmentName = this.depart.DepartmentName;
  }

  addDepartment() {
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.addDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.updateDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }
}
