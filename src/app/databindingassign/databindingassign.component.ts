import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databindingassign',
    templateUrl: './databindingassign.component.html',
    styleUrls: ['./databindingassign.component.css']
})
export class DatabindingassignComponent implements OnInit {
    userName = '';
    disableReset = true;
    constructor() { }

    ngOnInit() {
    }

    onUpdateUserName() {
        if (this.userName !== '') {
            this.disableReset = false;
        } else {
            this.disableReset = true;
        }
    }

    onResetUserName() {
        this.userName = '';
        this.disableReset = true;
    }

}
