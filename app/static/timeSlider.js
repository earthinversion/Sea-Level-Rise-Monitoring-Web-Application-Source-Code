document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#kaohsiung_region").onclick = dokaohsiung;
    document.querySelector("#mekong_region").onclick = domekong;
    document.querySelector("#taipei_region").onclick = dotaipei;

    var urlprefix = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [urlprefix+'kaoshiung_055_1.jpg', urlprefix+'kaoshiung_063_2.jpg', urlprefix+'kaoshiung_082_3.jpg', urlprefix+'kaoshiung_3_4.jpg'];
    var valuelist = ['0.55 m','0.63 m', '0.82 m', '3 m'];
    $("#mysliderid").attr({
        "max" : 3,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var slider = document.getElementById("mysliderid");
    var slidervalue = document.getElementById("slidervalue");

    slidervalue.innerHTML = slider.value


    slider.oninput = function() {
        slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("imageid").src =  urlList[this.value];
    }

});

function dokaohsiung() {
    console.log("Doing Kaohsiung");
    remove_all_class();
    document.getElementById("kaohsiung_region").classList.add('active_region');
    var urlprefix = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [urlprefix+'kaoshiung_055_1.jpg', urlprefix+'kaoshiung_063_2.jpg', urlprefix+'kaoshiung_082_3.jpg', urlprefix+'kaoshiung_3_4.jpg'];
    var valuelist = ['0.55 m','0.63 m', '0.82 m', '3 m'];
    $("#mysliderid").attr({
        "max" : 3,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var slider = document.getElementById("mysliderid");
    var slidervalue = document.getElementById("slidervalue");

    slidervalue.innerHTML = valuelist[slider.value];
    document.getElementById("imageid").src =  urlList[slider.value];


    slider.oninput = function() {
        slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("imageid").src =  urlList[this.value];
    }
}

function domekong() {
    console.log("Doing mekong");
    remove_all_class();
    document.getElementById("mekong_region").classList.add('active_region');

    var urlprefix = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [urlprefix+'coastline_mekong_0.png', urlprefix+'coastline_mekong_1.png', urlprefix+'coastline_mekong_2.png', urlprefix+'coastline_mekong_3.png', urlprefix+'coastline_mekong_4.png'];
    var valuelist = ['0 m','1 m', '2 m', '3 m', '4 m'];
    $("#mysliderid").attr({
        "max" : 4,        // substitute your own
        "min" : 0          // values (or variables) here
     });
    var slider = document.getElementById("mysliderid");
    var slidervalue = document.getElementById("slidervalue");

    slidervalue.innerHTML = valuelist[slider.value];
    document.getElementById("imageid").src =  urlList[slider.value];

    slider.oninput = function() {
        slidervalue.innerHTML = valuelist[this.value];
        // console.log(this.value)
        document.getElementById("imageid").src =  urlList[this.value];
    }
}

function dotaipei() {
    console.log("Doing taipei");
    remove_all_class();
    document.getElementById("taipei_region").classList.add('active_region');

    var urlprefix = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [urlprefix+'coastline_taipei_0.png', urlprefix+'coastline_taipei_5.png', urlprefix+'coastline_taipei_10.png', urlprefix+'coastline_taipei_15.png', urlprefix+'coastline_taipei_20.png'];
    var valuelist = ['0 m','5 m', '10 m', '15 m', '20 m'];
    $("#mysliderid").attr({
        "max" : 4,        // substitute your own
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
}

function remove_all_class() {
    if ( document.getElementById("kaohsiung_region").classList.contains('active_region') ){
        console.log('remove class kaosiung')
        document.getElementById("kaohsiung_region").classList.remove('active_region');
    }
    if ( document.getElementById("mekong_region").classList.contains('active_region') ){
        console.log('remove class mekong')
        document.getElementById("mekong_region").classList.remove('active_region');
    }
    if ( document.getElementById("taipei_region").classList.contains('active_region') ){
        console.log('remove class taipei_region')
        document.getElementById("taipei_region").classList.remove('active_region');
    }
}