document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector("#bangladesh_region").onclick = dobangladesh;
    // document.querySelector("#mekong_region").onclick = domekong;
    // document.querySelector("#taipei_region").onclick = dotaipei;

    
    var urlprefix = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/image_ready/";
    var urlList = [];
    var valuelist = [];
    index_vals = [0, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_heping_c0_"+index_vals[i]+".jpg";
        urlList.push(urlprefix+filename)
        valuelist.push(filename)
    }
    // console.log(urlList)
    
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

    // Heping cluster 2
    var hep2_urlList = [];
    var hep2_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_heping_c1_"+index_vals[i]+".jpg";
        hep2_urlList.push(urlprefix+filename)
        hep2_valuelist.push(filename)
    }

    $("#hep2_mysliderid").attr({
        "max" : hep2_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var hep2_slider = document.getElementById("hep2_mysliderid");
    var hep2_slidervalue = document.getElementById("hep2_slidervalue");
    
    hep2_slidervalue.innerHTML = hep2_valuelist[hep2_slider.value];
    var hep2_imageid = document.getElementById("hep2_imageid");
    hep2_imageid.src =  hep2_urlList[hep2_slider.value];

    hep2_slider.oninput = function() {
        hep2_slidervalue.innerHTML = hep2_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("hep2_imageid").src =  hep2_urlList[this.value];
    }

});