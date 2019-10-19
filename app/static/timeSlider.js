document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#kaohsiung_region").onclick = dokaohsiung;
    document.querySelector("#tuvalu_region").onclick = dotuvalu;
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

function dotuvalu() {
    console.log("Doing tuvalu");
    remove_all_class();
    document.getElementById("tuvalu_region").classList.add('active_region');

    var urlprefix = "https://raw.githubusercontent.com/earthinversion/logoStore/master/";
    var urlList = [urlprefix+'Tuvalu-Vaitupu_0_v2.jpeg', urlprefix+'Tuvalu-Vaitupu_5_v2.jpeg', urlprefix+'Tuvalu-Vaitupu_10_v2.jpeg', urlprefix+'Tuvalu-Vaitupu_15_v2.jpeg', urlprefix+'Tuvalu-Vaitupu_20_v2.jpeg'];
    var valuelist = ['0 m','5 m', '10 m', '15 m', '20 m'];
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
    var urlList = [urlprefix+'coastline_taipei_0.png', urlprefix+'coastline_taipei_055.png', urlprefix+'coastline_taipei_063.png', urlprefix+'coastline_taipei_082.png', urlprefix+'Tuvalu-Vaitupu_20_v2.jpeg'];
    var valuelist = ['0 m','5 m', '10 m', '15 m', '20 m'];
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

function remove_all_class() {
    if ( document.getElementById("kaohsiung_region").classList.contains('active_region') ){
        console.log('remove class kaosiung')
        document.getElementById("kaohsiung_region").classList.remove('active_region');
    }
    if ( document.getElementById("tuvalu_region").classList.contains('active_region') ){
        console.log('remove class tuvalu')
        document.getElementById("tuvalu_region").classList.remove('active_region');
    }
    if ( document.getElementById("taipei_region").classList.contains('active_region') ){
        console.log('remove class taipei_region')
        document.getElementById("taipei_region").classList.remove('active_region');
    }
}