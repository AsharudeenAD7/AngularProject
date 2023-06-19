import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
   name:string="Asharudeen Niyas";
   age:number=30;

   GetCity()
   {
    return 'Enangudi';
   }
}
