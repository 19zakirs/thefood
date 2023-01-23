filterSelection("allfood")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDivfood");
  if (c == "allfood") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "showfood");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showfood");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add activefood class to the current button (highlight it)
var btnfood69Container = document.getElementById("mybtnfood69Containerfood");
var btnfood69s = btnfood69Container.getElementsByClassName("btnfood69");
for (var i = 0; i < btnfood69s.length; i++) {
  btnfood69s[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activefood");
    current[0].className = current[0].className.replace(" activefood", "");
    this.className += " activefood";
  });
}




 













// var z ;
//     function showitem1(){
//       if(z==1)
//       {
//         document.getElementById("game1").style.display = "flex";
//         return z=0
//       }
//       else
//       {
//         document.getElementById("game1").style.display = "none";
//         return z=1
//       }
//     }
    
// var a ;
// function showitem2(){
//   if(a==1)
//   {
//     document.getElementById("game2").style.display = "flex";
//     return a=0
//   }
//   else
//   {
//     document.getElementById("game2").style.display = "none";
//     return a=1
//   }
// }

// var a ;
//     function showitem3(){
//       if(a==1)
//       {
//         document.getElementById("game3").style.display = "flex";
//         return a=0
//       }
//       else
//       {
//         document.getElementById("game3").style.display = "none";
//         return a=1
//       }
//     }
    
// var a ;
// function showitem4(){
//   if(a==1)
//   {
//     document.getElementById("game4").style.display = "flex";
//     return a=0
//   }
//   else
//   {
//     document.getElementById("game4").style.display = "none";
//     return a=1
//   }
// }

// var a ;
//     function showitem1(){
//       if(a==1)
//       {
//         document.getElementById("boxxxx1").style.display = "flex";
//         return a=0
//       }
//       else
//       {
//         document.getElementById("boxxxx1").style.display = "none";
//         return a=1
//       }
//     }
    
// var a ;
// function showitem1(){
//   if(a==1)
//   {
//     document.getElementById("boxxxx1").style.display = "flex";
//     return a=0
//   }
//   else
//   {
//     document.getElementById("boxxxx1").style.display = "none";
//     return a=1
//   }
// }
