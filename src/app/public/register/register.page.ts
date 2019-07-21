import  gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: string;
  public periodo: string;
  public email: string;
  public password: string;
  loading = true;
  error: any;
  showToolbar = false;

  constructor(private apollo:Apollo) { }

  ngOnInit() {
  }


  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }

  register($user: string){
    this.apollo
    .mutate({
      mutation: gql`
        mutation CreateUserMutation($user: String!, $periodo: String!, $email: String!, $password: String!){
          u1: CreateUser(id: "u1", name: $user, periodo: $periodo, email: $email, password: $password) {
            id
            name
            periodo
            email
            password
          }
        } 
      `,
      variables: {
        user: this.user,
        periodo: this.periodo,
        email: this.email,
        password: this.password
      }
    })
    .subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
  }
}
