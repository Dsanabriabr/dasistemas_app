import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  users: any[];
  loading = true;
  error: any;

  constructor(private authService: AuthenticationService, private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            User {
              name
              id
              periodo
              email
            }
          }
        `,
      })
      .valueChanges.subscribe((result : ApolloQueryResult<any> ) => {
        this.users = result.data && result.data.User;
        this.loading = result.loading;
        this.error = result.errors;
      });
  }

  logout(){
    this.authService.logout();
  }

}
