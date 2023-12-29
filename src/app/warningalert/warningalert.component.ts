import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warningalert.component.html',
    styles: [`
        p {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red;
        }
    `]
})
export class WarningAlertComponent {}