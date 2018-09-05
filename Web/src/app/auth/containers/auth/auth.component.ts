import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'component-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  selectedTabIndices = {
    login: 0,
    register: 1
  }
  selectedTabIndex = this.selectedTabIndices.login

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const authAction = this.route.snapshot.queryParams['action']
    this.selectedTabIndex = this.selectedTabIndices[authAction]
                            || this.selectedTabIndices['login']
  }

}
