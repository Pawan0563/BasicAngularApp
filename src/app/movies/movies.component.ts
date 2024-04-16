import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
// movieList:any=[];
// title: any;
// releaseDate: any;
// movieUrl: any;
// i: any;
// submitForm(){
//   var jsonData={
//     title:this.title,
//     releaseDate: this.releaseDate,
//     movieUrl:this.movieUrl
//   }
//   this.movieList.push(jsonData)
// }
// removeBlock(index){
//   this.movieList.splice(index,1);

// }


movieList:any=[
  {
    title:"Pawan Raja",
    releaseDate:"12/12/12",
    movieUrl:"https://i.ytimg.com/vi/ys2ktusi-4k/maxresdefault.jpg",
    Url:"pawanraja"
  },
  {
    title:"Bhart Mata",
    releaseDate:"12/09/16",
    movieUrl:"https://i.pinimg.com/564x/4d/3c/7a/4d3c7aab02f38939f28ac151d20eeb8f.jpg",
    Url:"bhartmata"

  },
  {
    title:"Sangharsh",
    releaseDate:"1/1/19",
    movieUrl:"https://i.pinimg.com/736x/94/14/4b/94144b32974d51cebbd90a01afb1f5af.jpg",
    Url:"pawanraja"

  },
  {
    title:"Bahubali",
    releaseDate:"12/12/12",
    movieUrl:"https://resize.indiatvnews.com/en/resize/newbucket/400_-/2017/05/betwa-bahubali-2-first-look-poster-top-10-bhojpuri-1494243611.jpg",
    Url:"pawanraja"

  }
]

}
