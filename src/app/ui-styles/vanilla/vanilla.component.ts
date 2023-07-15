import { Component } from '@angular/core';

@Component({
  selector: 'vanilla',
  templateUrl: './vanilla.component.html',
  styleUrls: ['./vanilla.component.scss']
})
export class VanillaComponent {
  submitButton = () => console.log("submitButton clieck");
}
