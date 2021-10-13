$(document).ready(function() {
    $("#accordionSidebar").load("static_template/sidePane.html");
    $("#topNavigation").load("static_template/topPane.html");
    $("#pgFooter").load("static_template/pgFooter.html");
    $("#logoutModal").load("static_template/logoutModal.html");
    console.log( "ready!" );
});

function activeMenu(menuItem){
    deactiveMenu();
    setTimeout(function(){
        $("#"+menuItem+"").addClass("active");
    }, 100);
    
}
function activeSubMenu(menuItem, isParentMenu, groupName, subMenuItem){
    deactiveMenu();
    setTimeout(function(){
        $("#"+menuItem+"").addClass("active");
        if(isParentMenu){
            $("#"+groupName+"").addClass("show");
            $("#"+subMenuItem+"").addClass("active");
        }
    }, 100);
    
}
function deactiveMenu(){
    setTimeout(function(){
        $(".collapse-item").removeClass("active");
        $(".collapse").removeClass("show");
        $(".nav-item").removeClass("active");
    }, 100);
   
}
function collapseMenu(menuItem){
    $("#"+menuItem+"").removeClass("show");
}
function expandMenu(menuItem){
    $("#"+menuItem+"").addClass("show");
}
function setPgTitle(title){
    setTimeout(function(){
        $("#pgTitle").text(title);
    }, 100);
}

