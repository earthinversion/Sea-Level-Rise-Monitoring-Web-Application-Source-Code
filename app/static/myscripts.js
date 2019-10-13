    document.addEventListener('DOMContentLoaded', function() {
      var width = document.body.clientWidth;

      document.getElementById('openbtn').onclick = showSidebar;
      document.getElementById('closebtn').onclick = hideSidebar;
      if (width < 1485) {
        alert("Screen size too small to view the content")
      }
  });
  
  function showSidebar() {
    document.getElementById("mySidebar").style.height = "100%";
    document.getElementById("openbtn").style.display = "None";
    document.getElementById("closebtn").style.display = "block";
}
  function hideSidebar() {
    document.getElementById("mySidebar").style.height = "0";
    document.getElementById("openbtn").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
}



// var abstractId = document.querySelector('#abstract1');
// if (abstractId) {
//   abstractId.textContent = "hello"
// }

