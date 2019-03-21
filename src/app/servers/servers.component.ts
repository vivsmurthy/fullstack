import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'testServer';
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);


    }

    ngOnInit() {
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! name is '+this.serverName;
    }

    onUpdateServerName(event: Event) {
        this.serverName = ( <HTMLInputElement>event.target).value;
    }
}
