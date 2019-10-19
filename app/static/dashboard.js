document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button1').onclick = showhideTable; 
       
});

function showhideTable() {
    console.log("showhide")
    if (document.querySelector("table").style.display == "none") {
        // loadAbstract(newcount)
        console.log('none'+document.querySelector("table").style.display)
        document.querySelector("table").style.display = "block";
        // document.querySelector("#table-body").style.display = "block";

        } else {
            console.log(document.querySelector("table").style.display)
        document.querySelector("table").style.display = "none";
        // document.querySelector("#table-body").style.display = "none";
        // hideAbstract(newcount)
        }
//   document.getElementById("openbtn").style.display = "None";
//   document.getElementById("closebtn").style.display = "block";
//   document.querySelector(".content-section").style.marginLeft = "13%";    
//   document.querySelector(".content-section").style.width = "87%";
//   document.querySelector(".content-section").style.transition = "width .5s ease-in-out";
//   document.querySelector(".content-section").style.transition = "margin-left .5s ease-in-out";
}
function hideSidebar() {
  document.getElementById("mySidebar").style.height = "0";
  document.getElementById("openbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
  document.querySelector(".content-section").style.marginLeft = "0px";
  document.querySelector(".content-section").style.width = "100%";
  document.querySelector(".content-section").style.transition = "width .5s ease-in-out";
  document.querySelector(".content-section").style.transition = "margin-left .5s ease-in-out";

}