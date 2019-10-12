 
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('openbtn').onclick = showSidebar;
      document.getElementById('closebtn').onclick = hideSidebar;
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