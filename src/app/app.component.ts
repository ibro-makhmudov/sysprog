import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  programsSettings = {
    colHeaders: ['время запуска', 'время вывполнения', 'приоритет'],
    rowHeaders(index) {
      return 'P' + (index + 1);
    },
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation'
  }

  tableSettings = {
    colHeaders(index) {
      return `${index}`;
    },
    rowHeaders(index) {
      return 'P' + (index + 1);
    },
    height: 'auto',
    editor: false,
    licenseKey: 'non-commercial-and-evaluation'
  }
}
