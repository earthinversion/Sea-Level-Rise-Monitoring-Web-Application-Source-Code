document.addEventListener('DOMContentLoaded', function() {
    // document.querySelector("#bangladesh_region").onclick = dobangladesh;
    // document.querySelector("#mekong_region").onclick = domekong;
    // document.querySelector("#taipei_region").onclick = dotaipei;

    
    var urlprefix = "https://raw.githubusercontent.com/nghia1991ad/nasa_photos/master/image_ready/";
    var urlList = [];
    var valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    // time_vals = ['2011/07/15 08:49:27','']
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

    // Kenting cluster 1
    var ken1_urlList = [];
    var ken1_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_kenting_c0_"+index_vals[i]+".jpg";
        ken1_urlList.push(urlprefix+filename)
        ken1_valuelist.push(filename)
    }

    $("#ken1_mysliderid").attr({
        "max" : ken1_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var ken1_slider = document.getElementById("ken1_mysliderid");
    var ken1_slidervalue = document.getElementById("ken1_slidervalue");
    
    ken1_slidervalue.innerHTML = ken1_valuelist[ken1_slider.value];
    var ken1_imageid = document.getElementById("ken1_imageid");
    ken1_imageid.src =  ken1_urlList[ken1_slider.value];

    ken1_slider.oninput = function() {
        ken1_slidervalue.innerHTML = ken1_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("ken1_imageid").src =  ken1_urlList[this.value];
    }


    // Kenting cluster 2
    var ken2_urlList = [];
    var ken2_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_kenting_c1_"+index_vals[i]+".jpg";
        ken2_urlList.push(urlprefix+filename)
        ken2_valuelist.push(filename)
    }

    $("#ken2_mysliderid").attr({
        "max" : ken2_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var ken2_slider = document.getElementById("ken2_mysliderid");
    var ken2_slidervalue = document.getElementById("ken2_slidervalue");
    
    ken2_slidervalue.innerHTML = ken2_valuelist[ken2_slider.value];
    var ken2_imageid = document.getElementById("ken2_imageid");
    ken2_imageid.src =  ken2_urlList[ken2_slider.value];

    ken2_slider.oninput = function() {
        ken2_slidervalue.innerHTML = ken2_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("ken2_imageid").src =  ken2_urlList[this.value];
    }


    // yehliu cluster 1
    var yeh1_urlList = [];
    var yeh1_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_yehliu_c0_"+index_vals[i]+".jpg";
        yeh1_urlList.push(urlprefix+filename)
        yeh1_valuelist.push(filename)
    }

    $("#yeh1_mysliderid").attr({
        "max" : yeh1_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var yeh1_slider = document.getElementById("yeh1_mysliderid");
    var yeh1_slidervalue = document.getElementById("yeh1_slidervalue");
    
    yeh1_slidervalue.innerHTML = yeh1_valuelist[yeh1_slider.value];
    var yeh1_imageid = document.getElementById("yeh1_imageid");
    yeh1_imageid.src =  yeh1_urlList[yeh1_slider.value];

    yeh1_slider.oninput = function() {
        yeh1_slidervalue.innerHTML = yeh1_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("yeh1_imageid").src =  yeh1_urlList[this.value];
    }


    // yehliu cluster 2
    var yeh2_urlList = [];
    var yeh2_valuelist = [];
    index_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    for (var i=0; i<index_vals.length;i++) {
        var filename = "img_yehliu_c1_"+index_vals[i]+".jpg";
        yeh2_urlList.push(urlprefix+filename)
        yeh2_valuelist.push(filename)
    }

    $("#yeh2_mysliderid").attr({
        "max" : yeh2_valuelist.length - 1,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var yeh2_slider = document.getElementById("yeh2_mysliderid");
    var yeh2_slidervalue = document.getElementById("yeh2_slidervalue");
    
    yeh2_slidervalue.innerHTML = yeh2_valuelist[yeh2_slider.value];
    var yeh2_imageid = document.getElementById("yeh2_imageid");
    yeh2_imageid.src =  yeh2_urlList[yeh2_slider.value];

    yeh2_slider.oninput = function() {
        yeh2_slidervalue.innerHTML = yeh2_valuelist[this.value];
        // console.log(this.value)
        document.getElementById("yeh2_imageid").src =  yeh2_urlList[this.value];
    }

});