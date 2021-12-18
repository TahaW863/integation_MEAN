import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {//awake
  }

  ngOnInit(): void {//start
    this.authService.subscribeLoginChange((newState: boolean) => {this.isLoggedIn = newState});
    this.authService.isLoggedIn().subscribe();
  }
}
