import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent { //implements OnInit {

  // constructor(private swUpdate: SwUpdate) { }

  // ngOnInit(): void {
  //     if (this.swUpdate.isEnabled) {
  //       this.swUpdate.available.subscribe(() => window.location.reload());


  //       const updatesAvailable = this.swUpdate.versionUpdates.pipe(
  //         filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
  //         map(evt => ({
  //           type: 'UPDATE_AVAILABLE',
  //           current: evt.currentVersion,
  //           available: evt.latestVersion,
  //         })));

  //       if (updatesAvailable) {
  //         window.location.reload();
  //       }
  //     }
  // }
}
