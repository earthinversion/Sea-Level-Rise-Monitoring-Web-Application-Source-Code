document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector("#bangladesh_region").onclick = dobangladesh;
    // document.querySelector("#mekong_region").onclick = domekong;
    // document.querySelector("#taipei_region").onclick = dotaipei;
    
    var urlprefix = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [];
    var valuelist = [];
    for (var year=2002; year<=2018;year++) {
        urlList.push(urlprefix+"CHLOR_"+year+"_Taiwan.png")
        valuelist.push(year)
    }
    console.log(urlList)
    
    $("#mysliderid").attr({
        "max" : valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var slider = document.getElementById("mysliderid");
    var slidervalue = document.getElementById("slidervalue");
    
    slidervalue.innerHTML = valuelist[slider.value];
    var imageid = document.getElementById("imageid");
    imageid.src =  urlList[slider.value];

    slider.oninput = function() {
        slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("imageid").src =  urlList[this.value];
    }

});