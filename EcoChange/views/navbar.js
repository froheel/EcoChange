function Item(name,link){
    this.name=name;
    this.link=link;
}

function NavBar(Items,id) {
    this.id= id;
    this.items= Items;
    navPool[this.id]=this;
}

var items= new Array();
var item1= new Item("Home","home");
var item2=new Item("Sign Up","signup");
var item3= new Item("Login","login");
var item4= new Item("About Us","aboutus");
var active;

items[0]= item1;
items[1]=item2;
items[2]=item3;
items[3]=item4;

var navPool=new Array();
var navbar1 = new NavBar(items,"nav1");


NavBar.prototype.render= function (divid) {
    //active= localStorage.getItem("active");
    var html="";
    html+= "<nav class='navbar navbar-expand-lg navbar-light bg-light fixed-top'><div class='container'>";
    html+="<a class='navbar-brand' href='#'>Eco Change <img id='mainlogo' src='planet_earth.png'></img></a>";
    html+="<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>"
    html+="<span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarResponsive'><ul class='navbar-nav ml-auto'>";
    
    for( i=0; i<this.items.length ; i++){

        if(active==i){
            html+="<li id=\'"+ this.id +"\'class='nav-item active' onclick='myFunction(this.id,"+ i+")' ><a class='nav-link' href=\'"+this.items[i].link+"\'>"+this.items[i].name;
            html+="</a></li>"
        }
        else{
            html+="<li id=\'"+ this.id +"\'class='nav-item' onclick='myFunction(this.id,"+ i+")'><a class='nav-link' href=\'"+this.items[i].link+"\'>"+this.items[i].name;
            html+="</a></li>"
        }
        
    }

    html+="</ul></div></div></nav>";     
    document.getElementById(divid).innerHTML = html;
}

NavBar.prototype.update= function(id,a){
    //localStorage.setItem("active",a);
    //active = a;
    var place="div";
    place+=id;
    this.render(place);
}

function myFunction(id, a){
    navPool[id].update(id,a);
}


function load(){
    navbar1.render('divnav1');    
}