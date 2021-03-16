import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { filter} from "rxjs/operators";
import {User} from 'src/app/model/user';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  filter!: string;

  // listfilter: string;
  // get filter(): string{
  //   return this.filter;
  // }
  // set filter(v) {
  //   this.listfilter = v;
  //   this.filtered_list = this.listfilter ? this.perform_filter(this.listfilter) : this.users$;
  // }
  //
  // perform_filter(filter_by: string) {
  //   filter_by = filter_by.toLocaleLowerCase();
  //   return this.users$.filter
  // }



  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
  }

  delete_this_user(id: number): void {
    alert("Biztos torolni szeretne?");
    this.userService.delete(id);
  }


}
