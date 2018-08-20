function show_hide_nav(){
    var i = document.getElementById('cc-navbar');
    if(i.className === "cc-nav")
        i.className += " cc-responsive";
    else
        i.className = "cc-nav";
}
