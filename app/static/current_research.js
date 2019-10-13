document.addEventListener('DOMContentLoaded', function() {
    $("li").click(function() {
        var myClass = this.className;
        // alert(myClass);
        if (document.querySelector("."+myClass+" .loadAbstract").style.display == "block") {
            showabs(myClass)
        } else {
            hideabs(myClass)
        }
     });
});



function showabs(myClass) {
    document.querySelector("."+myClass+" .abstract_view").style.display = "block";
    document.querySelector("."+myClass+" .loadAbstract").style.display = "none";
    document.querySelector("."+myClass+" .hideAbstract").style.display = "block";
}
function hideabs(myClass) {
    document.querySelector("."+myClass+" .abstract_view").style.display = "none";
    document.querySelector("."+myClass+" .loadAbstract").style.display = "block";
    document.querySelector("."+myClass+" .hideAbstract").style.display = "none";
}

