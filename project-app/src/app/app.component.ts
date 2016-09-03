import { Component } from '@angular/core';
import { LoggerService } from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private title: string = 'LoopBack SDK Builder - Project Starter';

  constructor(private logger: LoggerService) {
    this.logger.info(this.title);
  }
}
