import { HttpClient } from '@angular/common/http';



export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(url: 'https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb');
  }

  users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
    {name: 'WFM 6'}
  ];
}
