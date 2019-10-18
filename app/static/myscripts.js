    document.addEventListener('DOMContentLoaded', function() {
      var width = document.body.clientWidth;
      document.getElementById('openbtn').onclick = showSidebar;
      document.getElementById('closebtn').onclick = hideSidebar;
      if (width < 800) {
        alert("Screen size too small to view the content");
      };
      // var document_height = $(document).height();
      // document.querySelector(".sidebar_social_icons").style.paddingTop = document_height-10 + "px";
  });
  
  function showSidebar() {
    var document_height = $(document).height();
    document.getElementById("mySidebar").style.height = document_height+"px";
    document.getElementById("openbtn").style.display = "None";
    document.getElementById("closebtn").style.display = "block";
    document.querySelector(".content-section").style.marginLeft = "13%";    
    document.querySelector(".content-section").style.width = "87%";
    // document.querySelector(".content-section").style.transition = "width .5s";
}
  function hideSidebar() {
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
    document.querySelector(".content-section").style.marginLeft = "0px";
    document.querySelector(".content-section").style.width = "100%";
    // document.querySelector(".content-section").style.transition = "width .1s";

}


