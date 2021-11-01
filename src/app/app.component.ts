import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 
  ngOnInit():void{

  }
  
  title = 'Upcomming movies';
movies =[{
  name:'Spider Man',
  releaseDate:new Date()
},
{
  name:'Spider Man',
  releaseDate:new Date()
}
,
{
  name:'Spider Man',
  releaseDate:new Date()
},
{
  name:'Spider Man',
  releaseDate:new Date()
},
{
  name:'Spider Man',
  releaseDate:new Date()
}]

}
