import { Employee } from './models/Employee';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService{

    constructor(private http: Http){

    }

    getEmployees(): Array<Employee> {
        return [
            new Employee('Aby', 'hr'),
            new Employee('Remya', 'it')
          ];
    }

    getGithubUsers(){
        const observable = this.http.get('https://api.github.com/users');
        observable.subscribe(res => {
                console.log(res.json());
            });
    }
}