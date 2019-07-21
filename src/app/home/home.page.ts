import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            User {
              name
              id
              avgStars
              numReviews
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
}
