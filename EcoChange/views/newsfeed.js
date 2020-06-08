alreadysupported= false;

function support(){

    var span = document.getElementById("supports").innerText;
    var num= parseInt(span);
    num=num+1;
    if(alreadysupported==false){    
        document.getElementById("supports").innerHTML= 3;
        alreadysupported=true;
    
    }

}

function comment(){
comment= document.getElementById("Inputcomment");
commentval= comment.value;
var html="";

    if(commentval!=""){
        html+="<li class='comment'>";
        html+="<a class='pull-left' href='#'><img class='avatar' src='profilepic.png' alt='avatar'></a>";
        html+="<div class='comment-body'><div class='comment-heading'><h4 class='user'>Ali Khan</h4><h5 class='time'>1 minute ago</h5></div>";
        html+="<p>"+commentval+"</p></div>";
        html+="</li>";

        document.getElementById("Addcomment").innerHTML= html;
        document.getElementById("Inputcomment").value="";

    }


}


function  logout() {
    localStorage.setItem("active",0);
}




function mytoggle(){

    var element = document.getElementById("wrapper");
   element.classList.toggle("toggled");
   
}