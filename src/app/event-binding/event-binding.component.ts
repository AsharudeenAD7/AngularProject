import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { retry } from 'rxjs';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
    
    name:string="Ashar";
    EventType:string="";
    TwoDataBinding:string="";
    
    
    Empname!:string;
    text:string="No name is added";
    btnDisabled:boolean=true;

    TaskName:string="";

    constructor()
    {
      setInterval(()=>{
          this.btnDisabled=false;
      },3000);
    }

    myfunction()
    {
      this.name="Niyas";
    }

    //Getting data using event binding

    GetEvent(e:Event)
    {
       console.log(e); 
       this.EventType=(<HTMLInputElement>e.target).value;
       alert(this.EventType);
    }


    addName()
    {
        if(this.Empname!="")
        {
          this.text="your Name is "+this.Empname; 
        }
        else
        { 
          this.text="No Name is Added";
        }
    }
        
   
}



// let myschool=[{StdName:"Ashar",City:"EDY"},{StdName:"Anwar",City:"EDY"}];
// console.log(myschool);

class Movies
{
  MoviveName!:string;
  HeroName!:string;

  
}


var objarray:Movies[]=[];
for(let i=0;i<2;i++)
{
  objarray[i]=new Movies();
  objarray[i].HeroName="Hero"+i;
  objarray[i].MoviveName="Movie"+i;
}

console.log(objarray);















