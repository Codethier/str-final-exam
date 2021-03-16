import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from "rxjs/operators";
import {User} from 'src/app/model/user';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();
  sort_mem: string = '';
  filter_key: string = 'name';
  search: string = '';
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

  on_column_select(key: string): void {
    this.sort_mem = key;
  }

  delete_this_user(id: number): void {
    alert("Sure you wanna do this?");
    this.userService.delete(id).subscribe(() => this.users$ = this.userService.getAll());
  }


}
