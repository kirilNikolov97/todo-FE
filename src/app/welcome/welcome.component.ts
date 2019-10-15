import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromBean: string;

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    this.service.executeHelloWorld().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleError(error)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromBean = response.message;
  }

  handleError(error) {
    this.welcomeMessageFromBean = error.error.message;
  }


}
