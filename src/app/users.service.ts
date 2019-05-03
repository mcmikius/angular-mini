
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';



@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
    {name: 'WFM 6'}
  ];

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
      .map(function(response) {
        return response.json();
      })
      .map(response => response.results)
      .map(users => {
        return users.map(user => {
          return {
            name: user.name.first + ' ' + user.name.last,
            image: user.picture.large,
            geo: user.location.city + ' ' + user.location.state + ' ' + user.location.street
          }
        })
      })
  }
}

