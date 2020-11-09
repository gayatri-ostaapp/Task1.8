import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
  }

}
