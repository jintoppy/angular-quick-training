import { Component, ViewChild } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container') containerEl;
  title : string = 'Angular training';
  tutor = 'Jinto';

  constructor(private service: AppService){

  }

  ngOnInit(){
    this.service.getGithubUsers();
  }

  sayHello(){
    alert(this.title);
  }

}
