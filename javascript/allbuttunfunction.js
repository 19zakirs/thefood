var abdullah;
function displaygayab(){
    if(abdullah==1){
        document.getElementById("gayadjomasti").style.display = "none" ;
        return abdullah=0;
    }
    else{
        document.getElementById("gayadjomasti").style.display = "block";
        return abdullah=1;
    }
}



var abdullahrang;
function displayrangebarangi(){
    if(abdullahrang==1){
        document.getElementById("hasheart").style.color = "red" ;
        document.getElementById("hasheart").style.background = "#eee";
        return abdullahrang=0;
    }
    else{
        document.getElementById("hasheart").style.color = "#666";
        document.getElementById("hasheart").style.background = "#272520";
        return abdullahrang=1;
    }
}