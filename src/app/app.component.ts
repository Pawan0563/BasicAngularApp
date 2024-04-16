import { Component } from '@angular/core';
import { Movie } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {


//   name:string="Pawan Singh"
//   status:boolean=true;
//   title = 'BasicAngularApp';
//  value:any;
// myCompany: any;
//   dabbang(){
//     return "Dabbang Chhora"
//   }

//   submitButton(campany){
//     // console.log(campany.value)
//     this.value=campany.value
//   }

//   removeChild(){
//     this.status=false;
//   }

// status:boolean=true;
//   showBlock(data){
//    // alert(data.target.value)
//     if(data.target.value=="show"){
//       this.status=true;


//     }else{
//       this.status=false;
//     }

//   }

// selectedForm:any;

// showBlock(data){
//   this.selectedForm=data.target.value;

// }


data:any;
submitForm(empData) {
this.data=empData.value;

  
  }
  name: any;




}
