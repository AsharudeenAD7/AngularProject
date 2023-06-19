import { Component } from '@angular/core';

@Component({
  selector: 'app-array-of-object',
  templateUrl: './array-of-object.component.html',
  styleUrls: ['./array-of-object.component.css']
})
export class ArrayOfObjectComponent {
   school:Student[]=[];
   
  
}

class Student
{
  StdName!:string;
  Gender!:string;
}
