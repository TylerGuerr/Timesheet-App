import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Department } from 'src/app/interfaces/department';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deparments',
  templateUrl: './deparments.component.html',
  styleUrls: ['./deparments.component.scss']
})
export class DeparmentsComponent implements OnInit {
  departments: Department[] | undefined;
  $departments: Observable<Department[]> | undefined;

  constructor(
    private departmentService: DepartmentsService,
    private router: Router
  ){}

  ngOnInit(): void {
  //   this.departmentService.getDepartments().subscribe(departments => {
  //     this.departments = departments;
  // });
  this.$departments = this.departmentService.getDepartments();
  }
  goToDepartment(departmentId: string): void {
  this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
