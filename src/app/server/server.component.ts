import { Component } from '@angular/core';


@Component({
    selector:'app-server',
    // templateUrl: './server.component.html',
    template:`<div>
    This is a  warning,You are in danger!
  </div>
  <div [innerHTML]="MData"></div>`,
    styles:['div{border:1px solid red;background:#f8d7da;padding:15px;}']
})
export class ServerComponent
{
  MData:string="Hello <script>alert('ServerComponent');</script>";
}



