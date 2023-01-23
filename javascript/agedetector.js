var agebro = document.getElementById("AGE");

  window.onload =function(){
    setTimeout(function(){

        var teen = document.getElementById("teenfirstad");
        var teen2 = document.getElementById("teenfirstad2");
        var teen3 = document.getElementById("teenfirstadasd3");
        var teen4 = document.getElementById("teenfirstadasd4");

        var welcome = document.getElementById("welcome");
        var welcome1 = document.getElementById("welcome1");
        var welcome2 = document.getElementById("welcome2");


if(agebro.innerHTML == "1" || agebro.innerHTML == "2" || agebro.innerHTML == "3" || agebro.innerHTML == "4" || agebro.innerHTML == "5" || agebro.innerHTML == "6" || agebro.innerHTML == "7" || agebro.innerHTML == "8" || agebro.innerHTML == "9" || agebro.innerHTML == "10" || agebro.innerHTML == "11" || agebro.innerHTML == "12" || agebro.innerHTML == "13" || agebro.innerHTML == "14" || agebro.innerHTML == "15" ||agebro.innerHTML == "16" ||agebro.innerHTML == "17" ){


  
    teen.classList.toggle("popup-teenactive");
    
   setTimeout(() =>{
    //document.getElementById("popup1222").style.transform = "scale(0)";
    teen.classList.remove("popup-teenactive");
   },10000);

  
   
}

else if(  agebro.innerHTML == "18" || agebro.innerHTML == "19" || agebro.innerHTML == "20" || agebro.innerHTML == "21" || agebro.innerHTML == "22" || agebro.innerHTML == "23" || agebro.innerHTML == "24" || agebro.innerHTML == "25" || agebro.innerHTML == "26" || agebro.innerHTML == "30" || agebro.innerHTML == "32" || agebro.innerHTML == "33" || agebro.innerHTML == "34" || agebro.innerHTML == "35" || agebro.innerHTML == "27" ||agebro.innerHTML == "28" ||agebro.innerHTML == "29"){
       
        teen2.classList.toggle("popop-youngactive");
    
   setTimeout(() =>{
    //document.getElementById("popup1222").style.transform = "scale(0)";
    teen2.classList.remove("popop-youngactive");
   },10000);
      }


      else if(  agebro.innerHTML == "36" || agebro.innerHTML == "37" || agebro.innerHTML == "38" || agebro.innerHTML == "39" || agebro.innerHTML == "40" || agebro.innerHTML == "41" || agebro.innerHTML == "42" || agebro.innerHTML == "43" || agebro.innerHTML == "44" || agebro.innerHTML == "30" || agebro.innerHTML == "32" || agebro.innerHTML == "33" || agebro.innerHTML == "34" || agebro.innerHTML == "45" || agebro.innerHTML == "46" ||agebro.innerHTML == "47" ||agebro.innerHTML == "48" ||agebro.innerHTML == "49" ||agebro.innerHTML == "50"){


    
     teen3.classList.toggle("popop-oldactive");
  
 setTimeout(() =>{
  //document.getElementById("popup1222").style.transform = "scale(0)";
  teen3.classList.remove("popop-oldactive");
 },20000);
      }

      

else{

  teen4.classList.toggle("popop-everyoneactive");
  
  setTimeout(() =>{
   //document.getElementById("popup1222").style.transform = "scale(0)";
   teen4.classList.remove("popop-everyoneactive");
  },20000);

}
}, 1500)

}

//     else{
//       if(  agebro.innerHTML == "20" || agebro.innerHTML == "21" ||  agebro.innerHTML == "22" ||  agebro.innerHTML == "23" ||  agebro.innerHTML == "24" ||   agebro.innerHTML == "25" ){
//         document.getElementById("welcome1").style.opacity = "1";
//       document.getElementById("welcome1").classList.toggle("welcomeactive");
    
//    setTimeout(() =>{
//     //document.getElementById("popup1222").style.transform = "scale(0)";
//     document.getElementById("welcome1").style.opacity = "0";
//    },7000);
//       }
//     }
//     if(  agebro.innerHTML == "26" ||  agebro.innerHTML == "27" ||  agebro.innerHTML == "28" ||  agebro.innerHTML == "29" || agebro.innerHTML == "30" ||   agebro.innerHTML == "31" || agebro.innerHTML == "32" || agebro.innerHTML == "33" || agebro.innerHTML == "34"  || agebro.innerHTML == "35"  ){


// document.getElementById("welcome2").style.opacity = "1";
//     document.getElementById("welcome2").classList.toggle("welcomeactive");
  
//  setTimeout(() =>{
//   //document.getElementById("popup1222").style.transform = "scale(0)";
//   document.getElementById("welcome2").style.opacity = "0";
//  },7000);
 
// }

    

    
function adoldgayad(){

    var old = document.getElementById("teenfirstadasd3");
  
    old.style.display = "none";
  }

      
function younggayad(){

    var young = document.getElementById("teenfirstad2");
  
    young.style.display = "none";
  }


      
function teengayad(){

    var teen = document.getElementById("teenfirstad");
  
    teen.style.display = "none";
  }

  function adeverygayad(){

    var teen22 = document.getElementById("teenfirstadasd4");
  
    teen22.style.display = "none";
  }


  